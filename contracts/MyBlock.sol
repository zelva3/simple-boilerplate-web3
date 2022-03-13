pragma solidity ^0.8.9;

contract MyBlock {
    string value;
    constructor (string memory initvalue) public{
        value = initvalue;
    }
    function setvalue(string memory newvalue) public {
        value = newvalue;
    }
    function getvalue() public view returns (string memory){
        return value;
    }
}