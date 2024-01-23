
let account;

//Connect metamask wallet with my page
const connectToMetamask = async () => {
    if (window.ethereum !== "undefined") {
        const accounts = await ethereum.request({ method: "eth_requestAccounts" });
        account = accounts[0];
        document.getElementById("accountArea").innerHTML = account;
    }
}

const connectToContract = async () => {
    const ABI = [
        [
            {
                "inputs": [],
                "name": "buyFood",
                "outputs": [],
                "stateMutability": "payable",
                "type": "function"
            },
            {
                "inputs": [],
                "name": "deposit",
                "outputs": [],
                "stateMutability": "payable",
                "type": "function"
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
                "name": "sendMoney",
                "outputs": [],
                "stateMutability": "nonpayable",
                "type": "function"
            },
            {
                "inputs": [],
                "stateMutability": "nonpayable",
                "type": "constructor"
            },
            {
                "anonymous": false,
                "inputs": [
                    {
                        "indexed": true,
                        "internalType": "address",
                        "name": "user",
                        "type": "address"
                    },
                    {
                        "indexed": false,
                        "internalType": "uint256",
                        "name": "amount",
                        "type": "uint256"
                    },
                    {
                        "indexed": false,
                        "internalType": "uint256",
                        "name": "newBalance",
                        "type": "uint256"
                    }
                ],
                "name": "Deposit",
                "type": "event"
            },
            {
                "anonymous": false,
                "inputs": [
                    {
                        "indexed": true,
                        "internalType": "address",
                        "name": "sender",
                        "type": "address"
                    },
                    {
                        "indexed": true,
                        "internalType": "address",
                        "name": "recipient",
                        "type": "address"
                    },
                    {
                        "indexed": false,
                        "internalType": "uint256",
                        "name": "amount",
                        "type": "uint256"
                    },
                    {
                        "indexed": false,
                        "internalType": "uint256",
                        "name": "senderBalance",
                        "type": "uint256"
                    },
                    {
                        "indexed": false,
                        "internalType": "uint256",
                        "name": "recipientBalance",
                        "type": "uint256"
                    }
                ],
                "name": "SendMoney",
                "type": "event"
            },
            {
                "inputs": [
                    {
                        "internalType": "uint256",
                        "name": "amount",
                        "type": "uint256"
                    }
                ],
                "name": "withdrawBalance",
                "outputs": [],
                "stateMutability": "nonpayable",
                "type": "function"
            },
            {
                "inputs": [
                    {
                        "internalType": "address",
                        "name": "",
                        "type": "address"
                    }
                ],
                "name": "balances",
                "outputs": [
                    {
                        "internalType": "uint256",
                        "name": "",
                        "type": "uint256"
                    }
                ],
                "stateMutability": "view",
                "type": "function"
            },
            {
                "inputs": [],
                "name": "getBalance",
                "outputs": [
                    {
                        "internalType": "uint256",
                        "name": "",
                        "type": "uint256"
                    }
                ],
                "stateMutability": "view",
                "type": "function"
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
                "type": "function"
            }
        ]
    ];
    const Address = "0xf8e81D47203A594245E36C48e151709F0C19fBe8";
    window.web3 = await new Web3(window.ethereum);
    window.contract = await new window.web3.eth.Contract(ABI, Address);
    console.log("Burdayuj");
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

document.getElementById("meals").addEventListener("click", () => {
    const cards = document.getElementById("card");
    if (cards) {
        if (cards.classList.contains("active")) {
            cards.classList.remove("active");
        } else {
            cards.classList.add("active");
        }
    }
})
document.getElementById("log_out").addEventListener('click', () => {
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


