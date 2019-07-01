import web3 from "./web3";
import Fundraise from "./build/Fundraise.json";

// This is a function that will create a 'Fundraise' contract for each address that it's passed onto it
export default address => {
  return new web3.eth.Contract(JSON.parse(Fundraise.interface), address);
};
