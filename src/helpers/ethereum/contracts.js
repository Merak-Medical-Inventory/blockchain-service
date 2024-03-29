const {ethereumConnection} = require('../../shared/constants');
const fs = require('fs');

const transactionContractAbi = JSON.parse(fs.readFileSync(__dirname+`/../../../build/contracts/${process.env.TX_CONTRACT_NAME}`,'utf8'));
const transactionContract = new ethereumConnection.eth.Contract(transactionContractAbi.abi,process.env.TX_CONTRACT_TX);

const deviceTransactionContractAbi = JSON.parse(fs.readFileSync(__dirname+`/../../../build/contracts/${process.env.DV_TX_CONTRACT_NAME}`,'utf8'));
const deviceTransactionContract = new ethereumConnection.eth.Contract(deviceTransactionContractAbi.abi,process.env.DV_TX_CONTRACT_TX);

module.exports = {
    transactionContract,
    deviceTransactionContract
}