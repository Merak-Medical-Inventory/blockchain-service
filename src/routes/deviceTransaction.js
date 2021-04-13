const {Router} = require('express');

const {auth} = require('../middlewares/auth');

const { getDeviceTransactionCtrl , addDeviceTransactionCtrl} = require('../controllers/deviceTransactionController');
const { addDeviceTrasactionSchema} = require('../shared/transactionSchemas');

const {joiValidator} = require('../middlewares/joi');


const router = Router();

router.get('/:id',[auth],getDeviceTransactionCtrl);

router.post('/',[auth,joiValidator(addDeviceTrasactionSchema)],addDeviceTransactionCtrl);

module.exports = router;