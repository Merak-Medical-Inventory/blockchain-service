
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
      from : "0xc9273aA2205F20a47CdDd0B7e7716dc3904a1748"
    }
  }
}