const HDWalletProvider = require('@truffle/hdwallet-provider');
const { bytecode, interface } = require('./compile');
const Web3 = require('web3');
const provider = new HDWalletProvider(
    'YOUR MNEMONIC PHRASE',
    'YOUR RINKEBY INFURA ENDPOINTS'
);
const web3 = new Web3(provider);

const INITIAL_VALUE = 'ONE';
const deploy = async () =>{
    const accounts = await web3.eth.getAccounts();

    console.log('Contract deployed from: ', accounts[0]);

    const result = await new web3.eth.Contract(JSON.parse(interface))
    .deploy({data:bytecode, arguments:[INITIAL_VALUE]})
    .send({from:accounts[0], gas:'1000000'});

    console.log('Contract deployed to: ', result.options.address);

    provider.engine.stop();
}

deploy();