
let account;

// Connect metamask wallet with my page
const connectToMetamask = async () => {
    if (typeof window.ethereum !== "undefined") {
        try {
            const accounts = await ethereum.request({ method: "eth_requestAccounts" });
            const account = accounts[0];

        } catch (error) {
            console.error("Error connecting to Metamask:", error);
        }
    } else {
        console.error("Metamask or another Ethereum provider not found. Please install or enable it.");
    }
}






document.getElementById("login_button").addEventListener("click", () => {
    const sayfa = document.getElementById("sayfa");
    const login = document.getElementById("login");
    const username = document.getElementById("username");
    const password = document.getElementById("password");

    const enteredUsername = username.value;
    const enteredPassword = password.value;

    if (enteredUsername === 'a' && enteredPassword === 'a') {
        if (sayfa && login) {
            if (sayfa.classList.contains("active")) {
                sayfa.classList.remove("active");
                login.classList.remove("unactive");
            } else {
                sayfa.classList.add("active");
                login.classList.add("unactive");
            }
        }
    } else {
        alert("Invalid username or password");
    }
});


//Token operations
const web3 = new Web3(window.ethereum);
const contractAddress = '0xd5406B4dCFd712A95846E02010b9A4e93ac67977'; // Kontrat adresini gerçek bir değerle değiştirin
const contractAbi = [{
    "inputs": [
        {
            "internalType": "string",
            "name": "_name",
            "type": "string"
        },
        {
            "internalType": "string",
            "name": "_symbol",
            "type": "string"
        },
        {
            "internalType": "address",
            "name": "_tokenAddress",
            "type": "address"
        }
    ],
    "stateMutability": "nonpayable",
    "type": "constructor"
},
{
    "anonymous": false,
    "inputs": [
        {
            "indexed": true,
            "internalType": "address",
            "name": "owner",
            "type": "address"
        },
        {
            "indexed": true,
            "internalType": "address",
            "name": "spender",
            "type": "address"
        },
        {
            "indexed": false,
            "internalType": "uint256",
            "name": "value",
            "type": "uint256"
        }
    ],
    "name": "Approval",
    "type": "event"
},
{
    "anonymous": false,
    "inputs": [
        {
            "indexed": true,
            "internalType": "address",
            "name": "previousOwner",
            "type": "address"
        },
        {
            "indexed": true,
            "internalType": "address",
            "name": "newOwner",
            "type": "address"
        }
    ],
    "name": "OwnershipTransferred",
    "type": "event"
},
{
    "anonymous": false,
    "inputs": [
        {
            "indexed": true,
            "internalType": "address",
            "name": "from",
            "type": "address"
        },
        {
            "indexed": true,
            "internalType": "address",
            "name": "to",
            "type": "address"
        },
        {
            "indexed": false,
            "internalType": "uint256",
            "name": "value",
            "type": "uint256"
        }
    ],
    "name": "Transfer",
    "type": "event"
},
{
    "inputs": [
        {
            "internalType": "address",
            "name": "owner",
            "type": "address"
        },
        {
            "internalType": "address",
            "name": "spender",
            "type": "address"
        }
    ],
    "name": "allowance",
    "outputs": [
        {
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
        }
    ],
    "stateMutability": "view",
    "type": "function",
    "constant": true
},
{
    "inputs": [
        {
            "internalType": "address",
            "name": "spender",
            "type": "address"
        },
        {
            "internalType": "uint256",
            "name": "amount",
            "type": "uint256"
        }
    ],
    "name": "approve",
    "outputs": [
        {
            "internalType": "bool",
            "name": "",
            "type": "bool"
        }
    ],
    "stateMutability": "nonpayable",
    "type": "function"
},
{
    "inputs": [
        {
            "internalType": "address",
            "name": "account",
            "type": "address"
        }
    ],
    "name": "balanceOf",
    "outputs": [
        {
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
        }
    ],
    "stateMutability": "view",
    "type": "function",
    "constant": true
},
{
    "inputs": [],
    "name": "decimals",
    "outputs": [
        {
            "internalType": "uint8",
            "name": "",
            "type": "uint8"
        }
    ],
    "stateMutability": "view",
    "type": "function",
    "constant": true
},
{
    "inputs": [
        {
            "internalType": "address",
            "name": "spender",
            "type": "address"
        },
        {
            "internalType": "uint256",
            "name": "subtractedValue",
            "type": "uint256"
        }
    ],
    "name": "decreaseAllowance",
    "outputs": [
        {
            "internalType": "bool",
            "name": "",
            "type": "bool"
        }
    ],
    "stateMutability": "nonpayable",
    "type": "function"
},
{
    "inputs": [
        {
            "internalType": "address",
            "name": "spender",
            "type": "address"
        },
        {
            "internalType": "uint256",
            "name": "addedValue",
            "type": "uint256"
        }
    ],
    "name": "increaseAllowance",
    "outputs": [
        {
            "internalType": "bool",
            "name": "",
            "type": "bool"
        }
    ],
    "stateMutability": "nonpayable",
    "type": "function"
},
{
    "inputs": [],
    "name": "name",
    "outputs": [
        {
            "internalType": "string",
            "name": "",
            "type": "string"
        }
    ],
    "stateMutability": "view",
    "type": "function",
    "constant": true
},
{
    "inputs": [],
    "name": "owner",
    "outputs": [
        {
            "internalType": "address",
            "name": "",
            "type": "address"
        }
    ],
    "stateMutability": "view",
    "type": "function",
    "constant": true
},
{
    "inputs": [],
    "name": "renounceOwnership",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
},
{
    "inputs": [],
    "name": "symbol",
    "outputs": [
        {
            "internalType": "string",
            "name": "",
            "type": "string"
        }
    ],
    "stateMutability": "view",
    "type": "function",
    "constant": true
},
{
    "inputs": [],
    "name": "token",
    "outputs": [
        {
            "internalType": "contract ERC20",
            "name": "",
            "type": "address"
        }
    ],
    "stateMutability": "view",
    "type": "function",
    "constant": true
},
{
    "inputs": [],
    "name": "totalSupply",
    "outputs": [
        {
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
        }
    ],
    "stateMutability": "view",
    "type": "function",
    "constant": true
},
{
    "inputs": [
        {
            "internalType": "address",
            "name": "recipient",
            "type": "address"
        },
        {
            "internalType": "uint256",
            "name": "amount",
            "type": "uint256"
        }
    ],
    "name": "transfer",
    "outputs": [
        {
            "internalType": "bool",
            "name": "",
            "type": "bool"
        }
    ],
    "stateMutability": "nonpayable",
    "type": "function"
},
{
    "inputs": [
        {
            "internalType": "address",
            "name": "sender",
            "type": "address"
        },
        {
            "internalType": "address",
            "name": "recipient",
            "type": "address"
        },
        {
            "internalType": "uint256",
            "name": "amount",
            "type": "uint256"
        }
    ],
    "name": "transferFrom",
    "outputs": [
        {
            "internalType": "bool",
            "name": "",
            "type": "bool"
        }
    ],
    "stateMutability": "nonpayable",
    "type": "function"
},
{
    "inputs": [
        {
            "internalType": "address",
            "name": "newOwner",
            "type": "address"
        }
    ],
    "name": "transferOwnership",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
},
{
    "inputs": [
        {
            "internalType": "uint256",
            "name": "_amount",
            "type": "uint256"
        }
    ],
    "name": "withdrawToken",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
}]; // Kontrat ABI'sini ekleyin
const contractInstance = new web3.eth.Contract(contractAbi, contractAddress);

document.addEventListener('DOMContentLoaded', async () => {
    // Web3.js kullanılarak Metamask hesabını alın
    const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
    const yourMetamaskAddress = accounts[0];

    // Butonu seçin
    const withdrawButtons = document.querySelectorAll('.withdrawButton');

    // Butona tıklanınca withdrawToken fonksiyonunu çağırın

    withdrawButtons.forEach((button) => {
        button.addEventListener('click', async (e) => {
            const gasLimit = 100000; // İhtiyaca göre ayarlayın
            const amountToWithdraw = 1;
            console.log(e);
            try {
                const result = await contractInstance.methods.withdrawToken(amountToWithdraw)
                    .send({ from: yourMetamaskAddress, gas: gasLimit });

                console.log('Transaction Hash:', result.transactionHash);
                // Başka işlemler veya geri bildirimler burada yapılabilir
            } catch (error) {
                if (error.message.includes("User denied transaction signature")) {
                    console.log("Kullanıcı işlemi reddetti.");
                } else {
                    console.error('Error:', error);
                }
            }
        });
    });
});

//My Introduction div
const introductionSection = document.getElementById('Introduction');
const cards = document.getElementById("card");
const reservation_card = document.getElementById("reservation_card");




document.getElementById("homepage").addEventListener('click', () => {
    introductionSection.style.display = 'block';

    reservation_card.classList.remove("active");
    cards.classList.remove("active");




})


document.getElementById("log_out").addEventListener('click', () => {
    introductionSection.style.display = 'none';
    const sayfa = document.getElementById("sayfa");
    const login = document.getElementById("login");
    if (sayfa && login) {
        if (sayfa.classList.contains("active")) {
            sayfa.classList.remove("active");
            login.classList.remove("unactive");
        } else {
            login.classList.add("unactive");
        }
    }

})

document.getElementById("meals").addEventListener("click", () => {
    introductionSection.style.display = 'none';
    const cards = document.getElementById("card");
    const reservation_card = document.getElementById("reservation_card");
    if (reservation_card && cards) {
        if (cards.classList.contains("active")) {
            cards.classList.remove("active");
        } else {
            cards.classList.add("active");
            reservation_card.classList.remove("active");

        }
    }
})

document.getElementById("reservationbutton").addEventListener("click", () => {
    introductionSection.style.display = 'none';
    const reservation_card = document.getElementById("reservation_card");
    const cards = document.getElementById("card");
    if (reservation_card && cards) {
        if (reservation_card.classList.contains("active")) {
            reservation_card.classList.remove("active");

        } else {
            reservation_card.classList.add("active");
            cards.classList.remove("active")
        }
    }
})