const SmartContract = artifacts.require("SmartContract");
const DeviceTransactionContract = artifacts.require("DeviceTransactionContract");

module.exports = function(deployer) {
  deployer.deploy(SmartContract);
  deployer.deploy(DeviceTransactionContract);
};