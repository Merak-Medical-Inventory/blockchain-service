const web3 = require('web3');
const ethereumConnection = new web3(process.env.BLOCKCHAIN_HOST)

module.exports = {
    ethereumConnection
}