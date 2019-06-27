// The first thing we need to know is that we have more than one contract in 'Fundraise.sol' file.
// We want to only run the solidity compiler once. We don't want to compile our contracts everytime we run our app but only if we change them.
// Without having to recompile our contracts, we can just read the ABI for each contracts from this 'build' directory.
// If we do want to run the compiler file again, we will run through four steps:
// 1. Delete the 'build directory'.
// 2. Read the contracts file out of the contracts folder.
// 3. Compile both contracts.
// 4. Write the contract's ABI into the 'build' directory.

const path = require("path");
const solc = require("solc");
const fs = require("fs-extra"); //Improved version of the fs module with a couple more hepers

// 1. Delete the build directory
const buildPath = path.resolve(__dirname, "build");
fs.removeSync(buildPath); //The default npm fs module makes it really hard to delete a folder - that's why we're using the extra module.

// Get the path for the contracts file.
const contractsPath = path.resolve(__dirname, "contracts", "Fundraise.sol");
// 2. Read the source code for the contract file.
const source = fs.readFileSync(contractsPath, "utf8");

// 3. Compile both contracts with the solidity compiler (will return as many objects as there are different contracts in the contracts file.)
const output = solc.compile(source, 1).contracts; // --> 'output' is an object with two separate properties. Each property corresponds to a contract in the contract file.
// Recreate build directory
fs.ensureDirSync(buildPath);

// 4. Write the contract's ABI into the 'build' directory.

for (let contract in output) {
  fs.outputJsonSync(
    // outputJSONSync writes a JSON file to a speecified directory
    path.resolve(buildPath, contract.replace(":", "") + ".json"), // We are replacing the colon because the contract is a key of 'output'
    output[contract] // The is the contract in each iteration.
  );
}
