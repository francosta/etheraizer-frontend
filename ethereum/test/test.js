const assert = require("assert");
const ganache = require("ganache-cli");
const Web3 = require("web3");
const web3 = new Web3(ganache.provider());

const compiledFactoryContract = require("../build/CampaignFactory.json");
const compiledFundraise = require("../build/Fundraise.json");

let accounts;
let factory;
let projectAddress;
let project;

// If we create an actual project (using the factory) in the beforeEach function, then we won't have to do it in every single other test.
// We will just have that project available for us from now on.
beforeEach(async function() {
  accounts = await web3.eth.getAccounts(); // Gets the accounts in the network.
  factory = await new web3.eth.Contract(
    JSON.parse(compiledFactoryContract.interface)
  )
    .deploy({ data: compiledFactoryContract.bytecode })
    .send({ from: accounts[0], gas: "1000000" }); // Deploys the factory contract

  // The createCampaign function is not a view function and, as such, because we are changing something in the contract, we need to call '.send()'
  await factory.methods.createCampaign("100").send({
    from: accounts[0],
    gas: "1000000"
  }); // Instructs the factory contract to create a project.

  // Because getDeployedCampaigns() is a view function, we only need to '.call()' it.
  const addresses = await factory.methods.getDeployedCampaigns().call();
  const address = addresses[0];
  project = await new web3.eth.Contract( //Creates a javascript reference of the created project (contract).
    JSON.parse(compiledFundraise.interface),
    projectAddress
  ); // Read NOTE on this!
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
