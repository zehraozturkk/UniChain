let account;

const connectToMetamask = async () => {
    if (window.ethereum !== "undefined") {
        const accounts = await ethereum.request({ method: "eth_requestAccounts" });
        account = accounts[0];
        document.getElementById("accountArea").innerHTML = account;
    }
}

