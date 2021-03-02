// const web3 = require('web3');
// const connection = new web3('HTTP://127.0.0.1:7545');
// const fs = require('fs');

// const contractAbi = JSON.parse(fs.readFileSync(`../../../build/contracts/SmartContract.json`,'utf8'));
// const contract = new connection.eth.Contract(contractAbi.abi,'0x567f15cCa7c4bcb3bD23351D3052F257D6aA4275');

// const init = async () => {
//     try { /build/contracts/SmartContract.json
//         const accounts = await connection.eth.getAccounts()
//         console.log(accounts)
//         const accountBalance = await connection.eth.getBalance('0xc21C028629e101bBD94B4Bbe260629910A50324d')
//         console.log(accountBalance)

//     } catch (error) {
//         console.log(error)
//     }
// }

// const deployContract = async () => {
//     const contractAbi = JSON.parse(fs.readFileSync('SmartContract_sol_SmartContract.abi'));
//     const contract = new connection.eth.Contract(contractAbi);
//     const contractBytecode = fs.readFileSync('SmartContract_sol_SmartContract.bin').toString();
//     const listOfPosts = ['A Beginner’s Guide to Ethereum','How Does Ethereum Work?','The Year in Ethereum','What is Ethereum 2.0?', 'Ethereum is a Dark Forest'];
//     const deployedContract  = await contract.deploy({
//         data: contractBytecode,
//         arguments: [listOfPosts.map((name) =>
//           connection.utils.asciiToHex(name))]
//         }).send({
//           from: '0xb5f6eC03D47080C8A050F5B8Eff1933C0ce2E9e9',
//           gasPrice: connection.utils.toWei('0.00003', 'ether'),
//           gas: 1500000
//         })
//     contract.options.address = deployedContract.options.address;
//     console.log(deployedContract.options.address);
// }

// const addTransaction = async () => {
//     const response = await contract.methods.addTransaction('1','Baron','Rommel','inventario 1','inventario 2','acetaminofen',200).send({from: '0xFAa11d69E6b8D2e98b616dB96c5dE5724Eaf0ff7',gas:3000000})
//     console.log(response)
// }

// const getTransaction = async () => {
//     const response = await contract.methods.getTransaction('1').call();
// }
