const {Router} = require('express');

const {auth} = require('../middlewares/auth');

const { getTransactionCtrl , addTransactionCtrl} = require('../controllers/transactionController');
const { addTrasactionSchema} = require('../shared/transactionSchemas');

const {joiValidator} = require('../middlewares/joi');


const router = Router();

router.get('/:id',[auth],getTransactionCtrl);

router.post('/',[auth,joiValidator(addTrasactionSchema)],addTransactionCtrl);

module.exports = router;