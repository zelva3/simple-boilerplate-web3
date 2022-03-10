const assert = require('assert');
const ganache = require('ganache-cli');
const Web3 = require('web3');
const web3 = new Web3(ganache.provider());
const {bytecode, interface} = require('../compile')


let accounts;
let myblock;
const INITIAL_VALUE = 'ONE';
const NEW_VALUE = 'TWO';
beforeEach(async ()=>{
    accounts = await web3.eth.getAccounts();

    myblock = await new web3.eth.Contract(JSON.parse(interface))
    .deploy({data:bytecode, arguments:[INITIAL_VALUE]})
    .send({from:accounts[0], gas:'1000000'});
});

describe('MyBlock',()=>{
    it('contract deployed?',()=>{
        assert.ok(myblock.options.address);
    });
    it('has default message?', async ()=>{
        const default_value = await myblock.methods.getvalue().call();
        assert.equal(default_value,INITIAL_VALUE);
    });
    it('update new value', async ()=>{
        await myblock.methods.setvalue(NEW_VALUE).send({from:accounts[0]});
        const updated_value = await myblock.methods.getvalue().call();
        assert.equal(updated_value, NEW_VALUE);
    })
});