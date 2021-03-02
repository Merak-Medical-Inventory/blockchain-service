const {Router} = require('express');

const transactionRouter = require('./transaction');

const router = Router();

router.use('/transaction',transactionRouter); 

module.exports = router;

