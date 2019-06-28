//Configure and create an instance of web3
// Tell web3 that a deployed copy of the ProjectFactory contract already exists

// Assuming that the user has Metamask in the browser.
import Web3 from "web3";
import web3 from "./web3";

let web3;
// To define where we will get the instance of web3 from (server or browser), we need to check whether the code is running on the browser or the server and then, if it is running on the browser, if Metamask exists and is already injecting web3 in the browser.
// We do that by checking if the typeof window is defined. If it is, then it means that a window exists and, as such, that we are in a browser environment.
// If not, it means that we are running outside of a browser and, as such, our code is running on the server.
// In the case that we are not in the browser or Metamask is not running, then we need to setup our own provider, through Infura (which connects us to a node within the ETH network).

//the first condition will check for the existence of a browser. The second condition checks if web3 is in the window (which means Metamask is in place).
if (typeof window !== "undefined" && typeof window.web3 !== "undefined") {
  //We are in the browser and Metamask is running
  web3 = new Web3(window.web3.currentProvider);
} else {
  // We are not in the browser or Metamask is not running.
}
// const web3 = new Web3(window.web3.currentProvider);

export default web3;
