const HDWalletProvider = require("truffle-hdwallet-provider");
const Web3 = require("web3");

// In here, we will only be deploying the CampaignFactory contract. The Fundraise contract will only be deployed by a user, through the CmpaignFactory contract.
// When the app starts, only the CampaignFactory will be deployed.

const compiledProjectFactoryContract = require("../ethereum/build/CampaignFactory.json");
// We replace the following line with the previous line because we are not compiling our contract on the fly anymore. We are doing it directly from the local ABI file in the build directory.
// const { interface, bytecode } = require("./compile");

// We are going to use Truffle (HDWalletProvider) in order to set up our provider.
// We need to create a new instance of HDWalletProvider and pass it two arguments: our account's Mneumonic and the link for the network we want to connect to (our Infura link)
const provider = new HDWalletProvider(
  "tree over season air joke shock mushroom tail ancient soldier save era",
  "https://rinkeby.infura.io/v3/136de8105bcb446a8959963ad00fc182"
);

//Set up the web3 instance
const web3 = new Web3(provider);

// Now we need to use the newly-created web3 instance to deploy the contract
// We need to get the accounts in the web3 instance.

// Because we will be dealing with async functions and we do not want to use the .then but rather teh async/await functionality,
// and the await/async can only be used within functions, we will create a function deploy and call it right away.
const deploy = async function() {
  const accounts = await web3.eth.getAccounts();

  console.log("Attempting to deploy from account", accounts[0]);

  // Access the eth module inside the web3 instance and deploy the ABI. The ABI is the interface that we have to parse to be treated by JS.
  const result = await new web3.eth.Contract(
    JSON.parse(compiledProjectFactoryContract.interface)
  )
    .deploy({ data: "0x" + compiledProjectFactoryContract.bytecode })
    .send({ from: accounts[0] });

  console.log("Contract deployed to ", result.options.address);

  // result will be an instance of the contract.
};

deploy();
