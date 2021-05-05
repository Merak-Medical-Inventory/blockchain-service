const {deviceTransactionContract} = require('./contracts');
const {logger} = require('../Logger'); 

const addTransaction = async (id,sender,receiver,inventory1,inventory2,device,date) => {
    const response = await deviceTransactionContract.methods.addTransaction(id,sender,receiver,inventory1,inventory2,device,date).send({from: process.env.WALLET,gas:3000000})
    logger.info('AddDeviceTransaction -> ',response);
    return response;
}

const getTransaction = async (id) => {
    const response = await deviceTransactionContract.methods.getTransaction(id).call();
    logger.info('GetDeviceTransaction -> ',response);
    return response;
}

module.exports = {
    addTransaction,
    getTransaction
}