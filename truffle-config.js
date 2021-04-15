
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
      from : "0x38F64D180B5a2EbE549Cf4766605fc3f77F35B3b"
    }
  }
}