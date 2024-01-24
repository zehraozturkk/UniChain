// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract TokenExchange is ERC20, Ownable {
    ERC20 public token;

    constructor(
        string memory _name,
        string memory _symbol,
        address _tokenAddress
    ) ERC20(_name, _symbol) {
        token = ERC20(_tokenAddress);
    }

    function withdrawToken(uint256 _amount) external {
        require(_amount > 0, "Amount must be greater than zero");
        require(token.balanceOf(msg.sender) >= _amount, "Insufficient balance");

        // Transfer ERC-20 token from sender to this contract
        token.transferFrom(msg.sender, address(this), _amount);

        // Mint equivalent amount of tokens to the sender
        _mint(msg.sender, _amount);
    }
}
