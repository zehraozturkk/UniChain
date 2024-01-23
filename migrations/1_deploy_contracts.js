const Yemekhane = artifacts.require("Yemekhane");
const IERC20Token = artifacts.require("IERC20Token");

module.exports = function (deployer) {
  const name = "MyToken";
  const symbol = "MTK";
  const initialSupply = 1000000; // Örnek bir başlangıç arzı

  deployer.deploy(IERC20Token, name, symbol, initialSupply).then(() => {
    return deployer.deploy(Yemekhane, IERC20Token.address);
  });
};
