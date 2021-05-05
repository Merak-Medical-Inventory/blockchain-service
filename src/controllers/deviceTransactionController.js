const { ErrorHandler } = require('../helpers/ErrorHandler');
const { deviceTransaction } = require('../helpers/ethereum');
const { v4: uuidv4 } = require('uuid');
const {handleSuccess} = require('../helpers/succesHandler');


const getDeviceTransactionCtrl = async (req,res,next) => {
    try {
        const {id} = req.params;
        const data = await deviceTransaction.getTransaction(id);
        handleSuccess(200,'Device transaction',res,next,data);
    } catch (e) {
        console.error('getDeviceTransactionCtrl -> ',e)
       next(e.statusCode? e : new ErrorHandler(500,e.message))
    }
}

const addDeviceTransactionCtrl = async (req,res,next) => {
    try {
        const {sender,receiver,inventory1,inventory2,device,date} = req.body;
        const id = uuidv4()+new Date().valueOf();
        const data = await deviceTransaction.addTransaction(id,sender,receiver,inventory1,inventory2,device,date);
        handleSuccess(200,'Device transaction created',res,next,{id,...data});
    } catch (e) {
        console.error('addDeviceTransactionCtrl -> ',e)
        next(e.statusCode? e : new ErrorHandler(500,e.message))
    }
}

module.exports = {
    getDeviceTransactionCtrl,
    addDeviceTransactionCtrl
}
