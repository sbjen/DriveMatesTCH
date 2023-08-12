const Cont = artifacts.require("CarpoolContract");

module.exports = function (deployer, network, accounts) {
  // Choose the desired account index
  const deployingAccount = accounts[0];
  deployer.deploy(Cont, { from: deployingAccount });
};
