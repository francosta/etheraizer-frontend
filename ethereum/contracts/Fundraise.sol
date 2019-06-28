pragma solidity ^0.4.17;

//The contract function

// This function deploys a new fundraising project and creates an array with the deployed contracts (instantiated projects).
contract CampaignFactory {
    // Creates the array for deployed contracts.
    address[] public deployedCampaigns;

    function createCampaign(uint minimum) public {
        // We need to pass the minimim contribution to the Fundraise project but also the msg.sender as this will be the owner of the contract.
        // Given that our own account will actually deploy the contract through the Fundraise function, we will need to get the actual contract creator through this function.
        address newCampaign = new Fundraise(minimum, msg.sender);
        deployedCampaigns.push(newCampaign);
    }

    // As the function generated by the variable declaration only gives one of the deplyed contracts, we will need to create the function getDeployedCampaigns to get the entire array.
    function getDeployedCampaigns() public view returns (address[]) {
        return deployedCampaigns;
    }
}

contract Fundraise {

    // This are struct definitions and, as such, don't not craete an instance of the variable.
    // Unlike with the other variables, it won't generate a function to get the struct.
    struct Request {
        string description;
        uint value;
        address recipient;
        bool complete;
        uint approvalCount;
        // This mapping is a reference type. All others are value types. Referene types do not need to be initialized when we create a new instance of struct like we do in the createRequest function.
        mapping(address => bool) approvals;
    }

    // Struct to keep track of transaction history
    struct SupportTransaction {
        uint value;
        address supporter;
    }

    //Declare the variables by <type><visibility><name>
    address public manager;
    uint public minimumContribution;
    // We could use an array for the suporters but this will be very costly due to linear time search of arrays.
    // ;
    mapping(address => bool) public supporters;
    address[] public supportersAddresses;
    mapping(address => uint) public transactions;

    // We want to keep track of how many supporters the project (the contract) has.
    uint public supportersCount;

    Request[] public requests;

    // We create this modifier to guarantee that the only the manager can call certain functions.
    modifier restricted() {
        require(msg.sender == manager);
        _;
    }

    //The constructor function will take the minimum constribution as an argument. Syntax: function<name of contract><arguments><visibility>
    function Fundraise (uint minimum, address owner) public {
        // Sets the initial value of manager as the contract's owner
        manager = owner;
        //Sets the minimum contribution of the contract as the value set by the manager when it creates the contract
        minimumContribution = minimum;
    }

    // Defines the function to contribute as payable Syntax: function<name><visibility><payable if payable>
    function contribute() public payable {
        require(msg.value > minimumContribution);
        //We now create an element in the approvers mapping that maps the message sender - the new supporter - to true.
        supporters[msg.sender] = true;
        supportersCount ++;
        transactions[msg.sender] = msg.value;
        supportersAddresses.push(msg.sender);
    }

    function terminateProject() public {
        //Refund all supporters
        for (uint i = 1; i <= supportersAddresses.length; i++) {
            address supporterAddress = supportersAddresses[i-1];
            uint transactionValue = transactions[supporterAddress];
            supporterAddress.transfer(transactionValue);
        }
        //Selfdestruct
        selfdestruct(manager);
    }

    // Function that creates a new request and adds it to the request array.
    // It is restricted to the owner(manager) of the contract
    function createRequest(string description, uint value, address recipient) public restricted {
        Request memory newRequest = Request({
            description: description,
            value: value,
            recipient: recipient,
            complete: false,
            approvalCount: 0
        });
        requests.push(newRequest);
    }

    // Function for a supporter to approve a request. This function will take the index of the request to be approved
    function approveRequest(uint index) public {

        //Get the request to be approved into a function variable.
        // Very important to mark it as storage as we will want to change the actual request.
        Request storage request = requests[index];

        // We will need first to guarantee that the user trying to approve a measure is a supporter of the project.
        // If the user is in the supporters array, then 'supporters[msg.sender]' will return true. If it doesn't return true, the require will stop the function.
        require(supporters[msg.sender]);
        // Make sure that the user has not yet voted in this request.
        // We can look into the requests array, taking the index in the arguments and using the 'approvals' method (approvals is an attribute of supporters) and check for the user.
        // We want the require to return true if the user is not in the resquests[index].approvals array.
        require(!request.approvals[msg.sender]);

        //Add the user to the approvals array for the specific request.
        request.approvals[msg.sender] = true;

        // Increement the no. of approvals.
       request.approvalCount ++;
    }

    // Function for the manager to execute a request
    function finalizeRequest(uint index) public restricted {
        // Declare the local variable with storage (because we want to change the reference of the variable).
        // The capital Request indicates we want to create a local variable request of the type Request
        Request storage request = requests[index];

        // Want to only execute requests that have not been executed yet.
        require(!request.complete);

        //We want to make sure that the manager can only execute requests that are approved by a majority of supporters.
        require(request.approvalCount > (supportersCount / 2));

        // Send the money to the recipient of the request
        request.recipient.transfer(request.value);
        // Mark the request as finalized.
        request.complete = true;
    }
}