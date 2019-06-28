//Configure and create an instance of web3
// Tell web3 that a deployed copy of the ProjectFactory contract already exists

// Assuming that the user has Metamask in the browser.
import Web3 from "web3";

const web3 = new Web3(window.web3.currentProvider);

export default web3;
