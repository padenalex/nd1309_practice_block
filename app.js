const BlockClass = require('./block.js');

/**
 * Creating a block object
 */
const block = new BlockClass.Block("Test Block");

// Generating the block hash
block.generateHash();
console.log(`Block Hash: ${block.hash}`);
console.log(`Block: ${JSON.stringify(block)}`);


/**
 * Step 3: Run the application in node.js
 * 
 */

// From the terminal: cd into Project folder
// From the terminal: Run node app.js to run the code