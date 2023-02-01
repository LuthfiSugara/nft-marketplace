// eslint-disable-next-line no-undef
const NftMarket = artifacts.require("NftMarket");

module.exports = function(deployer) {
  deployer.deploy(NftMarket);
};
