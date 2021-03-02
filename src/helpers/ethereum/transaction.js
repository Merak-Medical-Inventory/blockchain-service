const {transactionContract} = require('./contracts');
const {logger} = require('../Logger'); 

const addTransaction = async (id,sender,receiver,inventory1,inventory2,item,amount) => {
    const response = await transactionContract.methods.addTransaction(id,sender,receiver,inventory1,inventory2,item,amount).send({from: process.env.WALLET,gas:3000000})
    logger.info('AddTransaction -> ',response);
    return response;
}

const getTransaction = async (id) => {
    const response = await transactionContract.methods.getTransaction(id).call();
    logger.info('GetTransaction -> ',response);
    return response;
}

module.exports = {
    addTransaction,
    getTransaction
}