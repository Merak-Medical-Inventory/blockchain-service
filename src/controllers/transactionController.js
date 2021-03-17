const { ErrorHandler } = require('../helpers/ErrorHandler');
const { transaction } = require('../helpers/ethereum');
const { v4: uuidv4 } = require('uuid');
const {handleSuccess} = require('../helpers/succesHandler');


const getTransactionCtrl = async (req,res,next) => {
    try {
        const {id} = req.params;
        const data = await transaction.getTransaction(id);
        handleSuccess(200,'Transaction',res,next,data);
    } catch (e) {
        console.error('getTransactionCtrl -> ',e)
       next(e.statusCode? e : new ErrorHandler(500,e.message))
    }
}

const addTransactionCtrl = async (req,res,next) => {
    try {
        const {sender,receiver,inventory1,inventory2,item,type,amount} = req.body;
        const id = uuidv4()+new Date().valueOf();
        const data = await transaction.addTransaction(id,sender,receiver,inventory1,inventory2,item,type,amount);
        handleSuccess(200,'Transaction created',res,next,{id,...data});
    } catch (e) {
        console.error('addTransactionCtrl -> ',e)
        next(e.statusCode? e : new ErrorHandler(500,e.message))
    }
}

module.exports = {
    addTransactionCtrl,
    getTransactionCtrl
}
