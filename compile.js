const path = require('path');
const fs = require('fs');
const solc = require('solc');

const filepath = path.resolve(__dirname,'contracts','MyBlock.sol');
const source = fs.readFileSync(filepath,'utf8');


const myblock = {
    language: 'Solidity',
    sources: {
        'MyBlock.sol':{
            content: source,
        },
    },
    settings: {
        outputSelection: {
            '*': {
                '*': ['*'],
            },
        },
    },
};

module.exports = JSON.parse(
    solc.compile(JSON.stringify(myblock))).contracts[
    'MyBlock.sol'
  ].MyBlock;
