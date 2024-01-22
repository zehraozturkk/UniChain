// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract UniChain {
    address public owner; // Kontrat sahibi
    mapping(address => uint256) public balances; // Kullanıcı bakiyeleri

    event Deposit(address indexed user, uint256 amount, uint256 newBalance);
    event SendMoney(
        address indexed sender,
        address indexed recipient,
        uint256 amount,
        uint256 senderBalance,
        uint256 recipientBalance
    );

    modifier onlyOwner() {
        require(msg.sender == owner, "You are not the owner");
        _;
    }

    constructor() {
        owner = msg.sender;
    }

    // Kullanıcı hesabına bakiye eklemek için
    function deposit() external payable {
        require(msg.value > 0, "Deposit amount must be greater than 0");
        balances[msg.sender] += msg.value;
        emit Deposit(msg.sender, msg.value, balances[msg.sender]);
    }

    // Yemek alımı işlemi
    function buyFood() external payable {
        require(msg.value > 0, "Payment amount must be greater than 0");

        // Yemek fiyatını belirleyin (örneğin, 1 ETH)
        uint256 foodPrice = 1 ether;
        require(msg.value >= foodPrice, "Insufficient payment");

        // Kullanıcı bakiyesinden ödeme düşülüyor
        balances[msg.sender] -= foodPrice;

        // Ek işlemleri buraya ekleyebilirsiniz (örneğin, yemekhane sistemi tarafından kayıt tutma)

        // Eğer fazladan para varsa, kullanıcıya geri ödeme yapabilirsiniz
        uint256 change = msg.value - foodPrice;
        if (change > 0) {
            payable(msg.sender).transfer(change);
        }
    }

    // Arkadaşa para gönderme işlemi
    function sendMoney(address recipient, uint256 amount) external {
        require(amount > 0, "Amount must be greater than 0");
        require(balances[msg.sender] >= amount, "Insufficient balance");

        balances[msg.sender] -= amount;
        balances[recipient] += amount;

        emit SendMoney(
            msg.sender,
            recipient,
            amount,
            balances[msg.sender],
            balances[recipient]
        );
    }

    // Kullanıcının bakiyesini kontrol etmek için
    function getBalance() external view returns (uint256) {
        return balances[msg.sender];
    }

    // Kontrat sahibinin bakiyesini çekmek için (sadece kontrat sahibi)
    function withdrawBalance(uint256 amount) external onlyOwner {
        require(
            amount <= address(this).balance,
            "Insufficient contract balance"
        );
        payable(owner).transfer(amount);
    }

    // Diğer gerekli fonksiyonları buraya ekleyebilirsiniz
    function selam() public pure returns (string memory) {
        return "Selam!";
    }
}
