// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

interface IERC20 {
    function transferFrom(
        address sender,
        address recipient,
        uint256 amount
    ) external returns (bool);

    function balanceOf(address account) external view returns (uint256);
}

contract Yemekhane {
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

    function buyMeal(uint256 _ethAmount) external payable {
        require(_ethAmount > 0, "Invalid ETH amount");

        // ETH miktarı karşılığında alınacak token miktarını hesapla
        uint256 tokenAmount = calculateTokenAmount(_ethAmount);

        // Kullanıcının yeterli ETH gönderdiğinden emin ol
        require(msg.value == _ethAmount, "Incorrect ETH amount");

        // Kullanıcının tokenları bu akıllı kontrata aktar
        require(
            token.transferFrom(admin, msg.sender, tokenAmount),
            "Token transfer failed"
        );

        emit BuyMeal(msg.sender, _ethAmount, tokenAmount);
    }

    // Admin, kontrattan ETH çekebilir
    function adminWithdrawEther(uint256 _amount) external onlyAdmin {
        require(
            _amount > 0 && _amount <= address(this).balance,
            "Invalid amount"
        );
        payable(admin).transfer(_amount);
    }

    // Kullanıcının alacağı token miktarını hesapla
    function calculateTokenAmount(
        uint256 _ethAmount
    ) internal pure returns (uint256) {
        // Burada token miktarını belirlemek için bir formül kullanabilirsiniz
        // Bu formülü projenizin gereksinimlerine göre özelleştirebilirsiniz
        // Örneğin: _ethAmount * oran
        return _ethAmount * 100; // Örnek olarak, 1 ETH = 100 token
    }

    // Diğer fonksiyonlar...
}
