// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "./IERC20.sol";

contract DiningHall {
    address public admin;
    IERC20 public token;

    event BuyMeal(
        address indexed buyer,
        uint256 ethAmount,
        uint256 tokenAmount
    );

    modifier onlyAdmin() {
        require(msg.sender == admin, "Only admin calls");
        _;
    }

    constructor(address _tokenAddress) {
        admin = msg.sender;
        token = IERC20(_tokenAddress);
    }

    function getUserTokenBalance(
        address account
    ) public view returns (uint256) {
        // Kullanıcının token bakiyesini almak için bu fonksiyonu kullanabilirsiniz
        return token.balanceOf(account);
    }

    function buyMealWithTokens(uint256 _tokenAmount) external {
        require(_tokenAmount > 0, "Invalid token amount");

        // Kullanıcının yeterli miktarda tokena sahip olup olmadığını kontrol et
        require(
            getUserTokenBalance(msg.sender) >= _tokenAmount,
            "Insufficient balance"
        );

        // Kullanıcının tokenları bu akıllı kontrata aktar
        require(
            token.transferFrom(msg.sender, address(this), _tokenAmount),
            "Token transfer failed"
        );

        // Burada yemek alma işlemleri gerçekleştirilebilir
        // Örneğin, belirli bir miktarda yemek verilebilir

        emit BuyMeal(msg.sender, 0, _tokenAmount); // Burada ethAmount 0 olarak belirtilmiştir, çünkü ETH alımı olmadan sadece token ile işlem gerçekleşiyor.
    }

    // Diğer fonksiyonlar...
}
