var Migrations = artifacts.require("./Migrations.sol");
var TrustMe = artifacts.require("./TrustMe.sol");

module.exports = function(deployer) {
  deployer.deploy(Migrations);
  deployer.deploy(TrustMe);
};
