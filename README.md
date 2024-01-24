# UniChain
[en:]

Introduction

It is as wrong as it is right to say that blockchain technology is the technology of the future, because the future is today. Especially in a time when online payments are becoming widespread, transparency in daily activities such as food orders is becoming even more important. However, while this technology is so reliable, why is it not widely used and it is thought to be an opportunity to popularize blockchain, starting with young people.
Integrating blockchain technology into cafeteria systems, which is a problem faced by universities, is one of the most feasible solutions that come to mind to popularize this technology. In this way, transparency in food purchases will be ensured and the use of blockchain among university students will be popularized.

University cafeteria systems manage weekly food purchases for a set fee. However, there are some limitations and problems with payments, such as the inability to transfer money between two people, buying food before a certain day, or losing money for food you have not eaten. Payments made using tokens aim to reduce the risk of money being lost by offering a more convenient process. Some of the problems experienced among students will be overcome with the ease of blockchain technology.
In this way, both the dissemination of blockchain technology and transparency in cafeteria systems will be ensured. Each university will be able to manage its own system and the need for external intermediaries, such as banks, will be reduced.

This is our project model:

![image](https://github.com/zehraozturkk/UniChain/assets/101568897/ac251356-b07e-4471-a77f-c537f713a149)

Technologies We Used:

HTML, CSS: Used for the design of the user interface.
JavaScript: Applied for developing the user interface and calling the smartcontracts.
Solidity: Utilized for writing smart contracts.
Truffle: Employed for compiling and migrating smart contracts.
Ganache: Offers a local blockchain for testing purposes.
MetaMask: A browser extension utilized for interacting with the Ethereum blockchain.


Instructions for running this project :


1. Clone and open the codes.

2. We use Ganache for create a test account.So please download ganache.And after the download ganache you can run this code for see your accounts and informations.
ganache-cli

3. Open your Metamask and add another acount.This account must be connected with your Ganache account.For this way you can use yhis account for testing.

4. You have to connect metamask to our webpage for token operations.In our webpage you can see CONNECT METAMASK button.You can click this button for connectiın.

5. We want to use smartconract functions.So you can deployed your contract using Truffle.Before that you can intall truffle.

6. After the installation run this command.

truffle deploy

7. After the deployment you can see in your terminal the contract address.Take this address and take abi and paste in your  main.js 

8. Now if you give the correct address and abi you can use your contrat's function.If you click the Reservation button in our Webpage and click the buttons for reservation Metamask wallet should ask you for permisson about operation.

