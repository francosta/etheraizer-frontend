//Configure and create an instance of web3 by finding which provider we will use.
// The goal of this file is to have web3 = new Web3(PROVIDER_WHICH_WE_WILL_FIND)
import Web3 from "web3";

// Initialize the web3 variable.
let web3;

// To define where we will get the instance of web3 from (server or browser), we need to check whether the code is running on the browser or the server and then, if it is running on the browser, if Metamask exists and is already injecting web3 in the browser.
// We do that by checking if the typeof window is defined. If it is, then it means that a window exists and, as such, that we are in a browser environment.
// If not, it means that we are running outside of a browser and, as such, our code is running on the server.
// In the case that we are not in the browser or Metamask is not running, then we need to setup our own provider, through Infura (which connects us to a node within the ETH network).

//the first condition will check for the existence of a browser. The second condition checks if web3 is in the window (which means Metamask is in place).
if (typeof window !== "undefined" && typeof window.web3 !== "undefined") {
  //We are in the browser and Metamask is running
  const web3BrowserProvider = window.web3.currentProvider;

  const provider = new Web3.providers.HttpProvider("http://127.0.0.1:7545");
  // Due to Metamask's new scurity measures we first need to enable the provider before instantiating web3 with it
  const getProvider = async () => {
    await web3BrowserProvider.enable(); // request authentication
  };
  getProvider();
  const OPTIONS = {
    defaultBlock: "latest",
    transactionConfirmationBlocks: 1,
    transactionBlockTimeout: 5
  };

  web3 = new Web3(web3BrowserProvider, null, OPTIONS);
} else {
  // We are not in the browser or Metamask is not running.
  // We need to set up our own provider, using the Rinkeby Eth network, through Infura (using the link that we were provided with).
  const web3ServerProvider = new Web3.providers.HttpProvider(
    "https://kovan.infura.io/v3/8b58c0fa62a64918bb5e776b7c58538e"
  );

  const provider = new Web3.providers.HttpProvider("http://127.0.0.1:7545");
  const OPTIONS = {
    defaultBlock: "latest",
    transactionConfirmationBlocks: 1,
    transactionBlockTimeout: 5
  };
  web3 = new Web3(web3ServerProvider, null, OPTIONS);
  // web3 = new Web3(web3ServerProvider);
}
// const web3 = new Web3(window.web3.currentProvider);

export default web3;
