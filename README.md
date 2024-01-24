# UniChain

## Introduction

Blockchain technology is not just the technology of the future; it's the technology of today. As online payments become widespread, transparency in daily activities, such as food orders, becomes increasingly important. Despite its reliability, blockchain technology is not as widely used as it could be. UniChain seeks to seize the opportunity to popularize blockchain, starting with young people.

Integrating blockchain technology into university cafeteria systems addresses a common issue faced by universities. This solution aims to popularize blockchain by ensuring transparency in food purchases and providing a convenient and secure payment process using tokens. UniChain envisions overcoming challenges in current cafeteria systems, reducing the risk of lost money, and promoting blockchain use among university students.

This project model overview:

![UniChain Model](https://github.com/zehraozturkk/UniChain/assets/101568897/ac251356-b07e-4471-a77f-c537f713a149)

## Technologies We Used

- **HTML, CSS:** Design of the user interface.
- **JavaScript:** Development of the user interface and calling smart contracts.
- **Solidity:** Writing smart contracts.
- **Truffle:** Compiling and migrating smart contracts.
- **Ganache:** Local blockchain for testing purposes.
- **MetaMask:** Browser extension for interacting with the Ethereum blockchain.

## Instructions for Running this Project

1. Clone and open the codes.

2. Use Ganache to create a test account. Download Ganache and run the following code to see your accounts and information:

    ```
    ganache-cli
    ```

3. Open your MetaMask and add another account connected to your Ganache account for testing.

4. Connect MetaMask to our webpage for token operations. Click the "CONNECT METAMASK" button on our webpage.

5. Deploy your contract using Truffle. Before that, install Truffle:

    ```
    npm install -g truffle
    ```

6. After the installation, run this command:

    ```
    truffle deploy
    ```

7. After deployment, you'll see the contract address in your terminal. Take this address and the ABI and paste them into your `main.js`.

8. Now, with the correct address and ABI, you can use your contract's functions. Click the "Reservation" button on our webpage, and when prompted by MetaMask, grant permission for the operation.

   
<p align="left">
  <img src="https://github.com/zehraozturkk/UniChain/assets/95762073/bdc95edd-0530-47f9-aaea-2849a2c52913" alt="Ekran Görüntüsü" width="300",height="300"/>
  
</p>

# UniChain

## Giriş

Blockchain teknolojisi sadece geleceğin teknolojisi değil, bugünün teknolojisi. Çevrimiçi ödemeler yaygınlaştıkça, yemek siparişleri gibi günlük faaliyetlerde şeffaflık daha da önemli hale geliyor. Güvenilir olmasına rağmen, blockchain teknolojisi neden daha yaygın olarak kullanılmıyor ve bu teknolojiyi gençlerle başlayarak popülerleştirmenin bir fırsat olduğu düşünülüyor.

Blockchain teknolojisinin üniversitelerin karşılaştığı yaygın bir sorun olan yemekhane sistemlerine entegre edilmesi, bu teknolojiyi popülerleştirmek için akla gelen en gerçekçi çözümlerden biridir. Bu şekilde, yemek alımlarında şeffaflık sağlanacak ve üniversite öğrencileri arasında blockchain kullanımı yaygınlaştırılacaktır.

Bu proje modeli genel bakış:

![UniChain Model](https://github.com/zehraozturkk/UniChain/assets/101568897/ac251356-b07e-4471-a77f-c537f713a149)

## Kullandığımız Teknolojiler

- **HTML, CSS:** Kullanıcı arayüzünün tasarımı.
- **JavaScript:** Kullanıcı arayüzünün geliştirilmesi ve akıllı kontratların çağrılması.
- **Solidity:** Akıllı kontratların yazımı.
- **Truffle:** Akıllı kontratların derlenmesi ve taşınması için kullanıldı.
- **Ganache:** Test amaçlı yerel bir blockchain sağlar.
- **MetaMask:** Ethereum blockchain ile etkileşim için kullanılan bir tarayıcı eklentisi.

## Bu Projeyi Çalıştırma Talimatları

1. Kodları klonlayın ve açın.

2. Test hesabı oluşturmak için Ganache kullanın. Ganache'yi indirin ve aşağıdaki kodu çalıştırarak hesaplarınızı ve bilgilerinizi görebilirsiniz:

    ```
    ganache-cli
    ```

3. MetaMask'ınızı açın ve test için Ganache hesabınıza bağlı başka bir hesap ekleyin.

4. Token işlemleri için MetaMask'ı web sayfamıza bağlayın. Web sayfamızdaki "METAMASK'I BAĞLA" düğmesine tıklayabilirsiniz.

5. Truffle kullanarak kontratınızı dağıtın. Öncesinde Truffle'ı yükleyin:

    ```
    npm install -g truffle
    ```

6. Kurulumun ardından bu komutu çalıştırın:

    ```
    truffle deploy
    ```

7. Dağıtımdan sonra kontrat adresini terminalinizde göreceksiniz. Bu adresi ve ABI'yi alın ve bunları `main.js` dosyanıza yapıştırın.

8. Şimdi, doğru adres ve ABI ile kontratınızın fonksiyonlarını kullanabilirsiniz. Web sayfamızdaki "Rezervasyon" düğmesine tıklayın ve MetaMask tarafından işlem için izin istendiğinde izin verin.

<p align="left">
  <img src="https://github.com/zehraozturkk/UniChain/assets/95762073/bdc95edd-0530-47f9-aaea-2849a2c52913" alt="Ekran Görüntüsü" width="300" height="300"/>
</p>

