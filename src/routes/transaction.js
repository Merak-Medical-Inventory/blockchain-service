const {Router} = require('express');

const { getTransactionCtrl , addTransactionCtrl} = require('../controllers/transactionController');
const { addTrasactionSchema} = require('../shared/transactionSchemas');

const {joiValidator} = require('../middlewares/joi');


const router = Router();

router.get('/:id',getTransactionCtrl);

router.post('/',[joiValidator(addTrasactionSchema)],addTransactionCtrl);

module.exports = router;