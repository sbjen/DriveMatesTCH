const Cont = artifacts.require("CarpoolContract");

module.exports = function (deployer) {
  deployer.deploy(Cont);
};
