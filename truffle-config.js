
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
      from : "0xD618fdcf3f2838C1B75c8774A32Dc904Ca389aA6"
    }
  }
}