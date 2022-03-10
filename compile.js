const path = require('path');
const fs = require('fs');
const solc = require('solc');

const filepath = path.resolve(__dirname,'contracts','MyBlock.sol');
const source = fs.readFileSync(filepath,'utf8');

module.exports = solc.compile(source,1).contracts[':MyBlock'];