const assert = require("assert");
const ganache = require("ganache-cli");
const Web3 = require("web3");
const ganacheGas = { gasLimit: 10000000 };
const provider = ganache.provider(ganacheGas);
const OPTIONS = {
  defaultBlock: "latest",
  transactionConfirmationBlocks: 1,
  transactionBlockTimeout: 5
};
const web3 = new Web3(provider, null, OPTIONS);

const compiledFactoryContract = require("../ethereum/build/CampaignFactory.json");
const compiledFundraise = require("../ethereum/build/Fundraise.json");

let accounts;
let factory;
let projectAddress;
let project;

// If we create an actual project (using the factory) in the beforeEach function, then we won't have to do it in every single other test.
// We will just have that project available for us from now on.
beforeEach(async function() {
  this.timeout(4000);
  accounts = await web3.eth.getAccounts(); // Gets the accounts in the network.
  factory = await new web3.eth.Contract(
    JSON.parse(compiledFactoryContract.interface)
  )
    .deploy({ data: compiledFactoryContract.bytecode })
    .send({ from: accounts[0], gas: "3000000" }); // Deploys the factory contract

  // The createCampaign function is not a view function and, as such, because we are changing something in the contract, we need to call '.send()'
  await factory.methods.createCampaign("100").send({
    from: accounts[0],
    gas: "3000000"
  }); // Instructs the factory contract to create a project.

  // Because getDeployedCampaigns() is a view function, we only need to '.call()' it.
  const addresses = await factory.methods.getDeployedCampaigns().call();
  projectAddress = addresses[0];
  project = await new web3.eth.Contract( //Creates a javascript reference of the created project (contract).
    JSON.parse(compiledFundraise.interface),
    projectAddress
  ); // Read NOTE on this!
});

// We want to the factory contract deployment
// We want to test the project contract deployment
// We want to test that the person who called the createCampaign function is the manager of the project contract.
// We want to make sure that a user can support a project.
// We want to test that only a contribution that meets the minimum requirements passes

describe("Projects", () => {
  // Test to check the deployment
  it("deploys the factory contract", () => {
    assert.ok(factory.options.address); // A contract will be deployed once it has an address.
  });

  it("deploys the project contract", () => {
    assert.ok(project.options.address);
  });

  it("the createCampaign caller is the manager of the project contract", async function() {
    const manager = await project.methods.manager().call();
    assert.equal(accounts[0], manager);
  });

  it("allows a user to support the project", async function() {
    supporter = accounts[1];
    await project.methods.contribute().send({
      from: supporter,
      value: "101" //When we deployed the contract, we set a minimum value of 100
    });
    assert(await project.methods.supporters(supporter).call());
  });

  it("the support matches the minimum contribution", async function() {
    try {
      supporter = accounts[1];
      await project.methods.contribute().send({
        from: supporter,
        value: "101" //When we deployed the contract, we set a minimum value of 100
      });
      // If the error is not thrown, we 'assert(false)' and the test doesn't pass. If there is an error, the code goes to the 'catch'.
      return assert(false);
      // the catch is always initialized with the error.
    } catch (err) {
      assert(err);
    }
  });

  it("allows a manager to propose a request", async function() {
    const manager = accounts[0];
    await project.methods
      .createRequest("test request", "100", accounts[0])
      .send({ from: manager, gas: "3000000" });

    const request = await project.methods.requests(0).call();

    assert.equal("test request", request.description);
  });

  it("only the manager can propose a request", async function() {
    this.timeout(20000);
    const manager = accounts[0];
    const supporter = accounts[1];

    try {
      await project.methods
        .createRequest("test request", "100", accounts[3])
        .send({ from: manager, gas: "3000000" });
      assert(false);
    } catch (err) {
      assert(err);
    }
  });

  it("processes request", async function() {
    this.timeout(7000);
    const manager = accounts[0];
    const supporter = accounts[1];

    await project.methods.contribute().send({
      from: manager,
      value: web3.utils.toWei("10", "ether")
    });

    await project.methods
      .createRequest("Open store", web3.utils.toWei("6", "ether"), supporter)
      .send({ from: manager, gas: "3000000" });

    await project.methods
      .approveRequest(0)
      .send({ from: manager, gas: "3000000" });

    await project.methods.finalizeRequest(0).send({
      from: manager,
      gas: "3000000"
    });

    let balance = await web3.eth.getBalance(supporter);
    balance = web3.utils.fromWei(balance, "ether");
    balance = parseFloat(balance);
    assert(balance > 104);
  });

  it("refunds supporters when contract is terminated", async function() {
    const supporter = accounts[1];
    let initialBalance = await web3.eth.getBalance(supporter);
    initialBalance = web3.utils.fromWei(initialBalance, "ether");
    initialBalance = parseFloat(initialBalance);

    await project.methods.contribute().send({
      from: supporter,
      value: web3.utils.toWei("6", "ether")
    });

    await project.methods.terminateProject().call();

    let finalBalance = await web3.eth.getBalance(supporter);
    finalBalance = web3.utils.fromWei(finalBalance, "ether");
    finalBalance = parseFloat(finalBalance);

    assert(initialBalance - finalBalance < 1);
  });
});

// There is something to note about the way we created the javascript instance of the Fundraise contract.
// The following is how we have been doing it:

// project = await new web3.eth.Contract(
//     JSON.parse(compiledFundraise.interface)
//   )
//     .deploy({ data: compiledFundraise.bytecode })
//     .send({ from: accounts[0], gas: "1000000" })

// We always do this when we want to craete a JS instance of a contract that has not yet been deployed.
// However, becasue the Fundraise contract had already been deployed when we called 'createCampaign' in the factory,
// we only needed to craete its JS instance.
// That is why we only need to pass to the 'JSON.parse' function the contract's interface and its deployment address:

// project = await new web3.eth.Contract( //Creates a javascript reference of the created project (contract).
//     JSON.parse(compiledFundraise.interface),
//     projectAddress
//   )
