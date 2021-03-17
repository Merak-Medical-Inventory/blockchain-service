
module.exports = {
  compilers : {
    solc: {
      version: "^0.6.4",
  }
},
  networks: {
    development: {
      host: "localhost",
      port: 7545,
      network_id: "5777",
      from : "0x7f71B7d2915e705b9586a6E04d916abe3Ecc8129"
    }
  }
}