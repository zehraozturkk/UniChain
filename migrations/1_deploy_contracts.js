const TokenExchange = artifacts.require("TokenExchange");

module.exports = function (deployer) {
  const newName = "NewTokenName";
  const newSymbol = "NTN";
  const tokenAddress = "0x5F3c884e8D9096271dEDe693e4A2EC6647dB86B9"; 

  deployer.deploy(TokenExchange, newName, newSymbol, tokenAddress);
};
