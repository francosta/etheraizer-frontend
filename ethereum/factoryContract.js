// This file has the goal of creating a javascript instance of the deployed contract.
// After this is setup we can just import it into any other file and use it as if it were a js class with all the methods available to us.

// Get created instance of web3
import web3 from "./web3";

//Get deployed contract's ABI
import ProjectFactory from "./build/CampaignFactory.json";

// Create an instance of the contract with the deployed contract's address
const contractInstance = new web3.eth.Contract(
  JSON.parse(ProjectFactory.interface),
  "0xe7Ece85e49885FeE1Fc84C5Bb6A79Fac6A85f999"
);

export default contractInstance;
