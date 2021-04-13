const SmartContract = artifacts.require("SmartContract");
const DeviceTrasactionSmartContract = artifacts.require("DeviceTrasactionSmartContract");

module.exports = function(deployer) {
  deployer.deploy(SmartContract);
  deployer.deploy(DeviceTrasactionSmartContract);
};