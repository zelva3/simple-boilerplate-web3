pragma solidity 0.4.17;

contract MyBlock {
    string value;
    function MyBlock (string initvalue) public{
        value = initvalue;
    }
    function setvalue(string newvalue) public {
        value = newvalue;
    }
    function getvalue() public view returns (string){
        return value;
    }
}