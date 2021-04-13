const {Router} = require('express');

const transactionRouter = require('./transaction');
const deviceTransactionRouter = require('./deviceTransaction');

const router = Router();

router.use('/transaction',transactionRouter);
router.use('/device',deviceTransactionRouter); 

module.exports = router;