pragma solidity ^0.6.4;

contract SmartContract {

struct Transaction { 
    string receiver;
    string sender;
    string inventory1;
    string inventory2;
    string item;
    string date;
    uint amount;
}

mapping (string => Transaction) public transactionsMap;

  function getTransaction(string memory _id) view public returns (string memory receiver , string memory sender , string memory inventory1, string memory inventory2 , string memory item, uint amount, string memory date)
  {
    Transaction memory transaction = transactionsMap[_id];
    receiver = transaction.receiver;
    sender = transaction.sender;
    inventory1= transaction.inventory1;
    inventory2 = transaction.inventory2;
    item = transaction.item;
    amount = transaction.amount;
    date = transaction.date;
  }

  function addTransaction(string memory _id ,string memory _sender,string memory _receiver , string memory _inventory1, string memory _inventory2, string memory _item, uint _amount,string memory _date ) public {
    Transaction memory transaction;
    transaction.receiver = _receiver;
    transaction.sender = _sender;
    transaction.inventory1 = _inventory1;
    transaction.inventory2 = _inventory2;
    transaction.item = _item;
    transaction.amount = _amount;
    transaction.date = _date;
    transactionsMap[_id] = transaction;
  }
}
