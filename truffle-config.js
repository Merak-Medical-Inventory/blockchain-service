
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
      from : "0xfDa41D36B00c4a9179728209894cAb24e9cC9634"
    }
  }
}