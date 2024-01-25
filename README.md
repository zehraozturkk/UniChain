# UniChain
<img width="800" alt="Ekran Resmi 2024-01-25 18 51 22" src="https://github.com/zehraozturkk/UniChain/assets/95762073/2fcd271e-3ba9-4615-b88a-44862123b3ac">

## Introduction

Blockchain technology is not just the technology of the future; it's the technology of today. As online payments become widespread, transparency in daily activities, such as food orders, becomes increasingly important. Despite its reliability, blockchain technology is not as widely used as it could be. UniChain seeks to seize the opportunity to popularize blockchain, starting with young people.

Integrating blockchain technology into university cafeteria systems addresses a common issue faced by universities. This solution aims to popularize blockchain by ensuring transparency in food purchases and providing a convenient and secure payment process using tokens. UniChain envisions overcoming challenges in current cafeteria systems, reducing the risk of lost money, and promoting blockchain use among university students.

## Security Issues:

### Centralized System Vulnerabilities:
Centralized systems can be weak in terms of security due to concentration in a single point. This makes them more susceptible to malicious attacks or data leaks.

### Data Privacy Concerns:
Central systems store users' personal and private information in a single central point, raising concerns about user data privacy.

### Single Point of Failure:
Central systems, concentrated on a single server or system, can lead to the entire system being affected in case of a failure or downtime.

### Slow Response Times:
Central systems can result in slow response times, especially during periods of high demand. This can be a significant issue for large-scale cafeteria systems.

### Dependency and Control Issues:
Users may have limited participation in system changes or decision-making processes due to being under the control of a central authority. This can lead to users having less control over the system.

## Solutions:

### Decentralized Architecture:
Implementing a decentralized system architecture helps enhance security by distributing data across nodes, reducing vulnerability to attacks.

### Privacy-Focused Design:
Design the system with a focus on privacy, implementing encryption and decentralized storage solutions to address data privacy concerns.

### Fault-Tolerant Design:
Adopt a fault-tolerant design by distributing critical system functions across multiple nodes, minimizing the impact of a single point of failure.

### Scalable Infrastructure:
Utilize a scalable infrastructure to handle varying levels of demand and prevent slow response times during peak usage.

### Community Governance:
Implement governance models that allow users to actively participate in decision-making processes, giving them more control over the system.


This is our project model overview:


<img width="600" alt="" src="https://github.com/zehraozturkk/UniChain/assets/101568897/ac251356-b07e-4471-a77f-c537f713a149">


## Technologies We Used

<img src="https://www.vectorlogo.zone/logos/w3_html5/w3_html5-icon.svg" alt="HTML" width="40" height="40"/> <img src="https://www.vectorlogo.zone/logos/w3_css/w3_css-icon.svg" alt="CSS" width="40" height="40"/> <img src="https://www.vectorlogo.zone/logos/javascript/javascript-icon.svg" alt="JavaScript" width="40" height="40"/> <img src="https://docs.soliditylang.org/en/latest/_static/img/logo.svg" alt="Solidity" width="40" height="40"/> <img src="https://trufflesuite.com/assets/logo.png" alt="Truffle" width="40" height="40"/> <img src="https://seeklogo.com/images/G/ganache-logo-1EB72084A8-seeklogo.com.png" alt="Ganache" width="40" height="40"/> <img src="https://logowik.com/content/uploads/images/metamask-fox-icon-in-flat-style2194.logowik.com.webp" alt="MetaMask" width="40" height="40"/>

  


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

   
<p align="left" >
  <img src="https://github.com/zehraozturkk/UniChain/assets/95762073/b7291788-8a5e-4911-b3ef-5eb3dfd8f2b2" alt="Ekran Görüntüsü" width="200",height="250" />
  
</p>

# UniChain Projesi

## Tanıtım

Blockchain teknolojisi sadece geleceğin teknolojisi değil, bugünün teknolojisidir. Online ödemelerin yaygınlaşması ile günlük aktivitelerde, özellikle yemek siparişlerinde şeffaflık giderek daha önemli hale gelmektedir. Ancak, güvenilir olmasına rağmen blockchain teknolojisi, yaygın olarak kullanılmamaktadır. UniChain, bu fırsatı gençlerle başlayarak blockchain'i popülerleştirmeyi hedeflemektedir.

Blockchain teknolojisini üniversite yemekhane sistemlerine entegre etmek, üniversitelerin karşılaştığı ortak bir sorunu ele almaktadır. Bu çözüm, gıda alımlarında şeffaflığı sağlayarak ve token kullanarak kullanıcılar için güvenli ve uygun bir ödeme süreci sunarak blockchain'i popülerleştirmeyi amaçlamaktadır. UniChain, mevcut yemekhane sistemlerindeki zorlukları aşmayı, kayıp paraların riskini azaltmayı ve üniversite öğrencileri arasında blockchain kullanımını teşvik etmeyi hedeflemektedir.

## Güvenlik Sorunları:

### Merkezi Sistem Güvenlik Açıkları:
Merkezi sistemler, tek bir noktada yoğunlaştıkları için güvenlik açısından zayıf olabilir. Bu durum, kötü niyetli saldırılara veya veri sızıntılarına karşı daha savunmasız hale getirebilir.

### Veri Gizliliği Endişeleri:
Merkezi sistemler, kullanıcıların kişisel ve özel bilgilerini tek bir merkezi noktada depolarlar. Bu durum, kullanıcıların veri gizliliği endişelerini artırabilir.

### Tek Noktada Arıza Riski:
Merkezi sistemler, tek bir sunucu veya sistemde yoğunlaştıkları için, bu sistemin arızalanması veya devre dışı kalması durumunda tüm sistemin etkilenmesine neden olabilir.

### Yavaş Yanıt Süreleri:
Merkezi sistemler, yoğun talep durumlarında yavaş yanıt sürelerine neden olabilir. Özellikle büyük ölçekli yemekhane sistemlerinde bu durum önemli bir sorun olabilir.

### Bağımlılık ve Kontrol Sorunları:
Kullanıcılar, merkezi bir otoritenin kontrolü altında oldukları için sistemdeki değişikliklere veya karar alma süreçlerine katılım konusunda sınırlı olabilirler. Bu durum, kullanıcıların sistem üzerinde daha az kontrol sahibi olmalarına neden olabilir.

## Çözümler:

### Merkeziyetsiz Mimarilik:
Merkezi olmayan bir sistem mimarisi uygulamak, veriyi düğümler arasında dağıtarak güvenliği artırır ve saldırılara karşı savunmasızlığı azaltır.

### Gizlilik Odaklı Tasarım:
Sistemi gizlilik odaklı tasarlayarak, veri gizliliği endişelerini ele almak için şifreleme ve merkezi olmayan depolama çözümlerini uygulayın.

### Arıza Toleranslı Tasarım:
Kritik sistem fonksiyonlarını birden fazla düğüme dağıtarak arıza toleranslı bir tasarım benimseyin, tek bir arıza noktasının etkisini en aza indirin.

### Ölçeklenebilir Altyapı:
Değişen talep seviyelerini yönetmek ve yoğun kullanım dönemlerinde yavaş yanıt sürelerini önlemek için ölçeklenebilir bir altyapı kullanın.

### Topluluk Yönetimi:
Kullanıcılara sistem değişikliklerine aktif bir şekilde katılım sağlayan yönetim modelleri uygulayın, böylece kullanıcıların sistemi daha fazla kontrol etmelerini sağlayın.

## Proje Modeli İncelemesi:
<img width="600" alt="" src="https://github.com/zehraozturkk/UniChain/assets/101568897/ac251356-b07e-4471-a77f-c537f713a149">


## Kullandığımız Teknolojiler

<img src="https://www.vectorlogo.zone/logos/w3_html5/w3_html5-icon.svg" alt="HTML" width="40" height="40"/> <img src="https://www.vectorlogo.zone/logos/w3_css/w3_css-icon.svg" alt="CSS" width="40" height="40"/> <img src="https://www.vectorlogo.zone/logos/javascript/javascript-icon.svg" alt="JavaScript" width="40" height="40"/> <img src="https://docs.soliditylang.org/en/latest/_static/img/logo.svg" alt="Solidity" width="40" height="40"/> <img src="https://trufflesuite.com/assets/logo.png" alt="Truffle" width="40" height="40"/> <img src="https://seeklogo.com/images/G/ganache-logo-1EB72084A8-seeklogo.com.png" alt="Ganache" width="40" height="40"/> <img src="https://logowik.com/content/uploads/images/metamask-fox-icon-in-flat-style2194.logowik.com.webp" alt="MetaMask" width="40" height="40"/>

HTML, CSS: Kullanıcı arayüzünün tasarımı.

JavaScript: Kullanıcı arayüzünün geliştirilmesi ve akıllı sözleşmelerin çağrılması.

Solidity: Akıllı sözleşmelerin yazılması.

Truffle: Akıllı sözleşmelerin derlenmesi ve dağıtılması.

Ganache: Test amaçlı yerel blockchain.

MetaMask: Ethereum blockchain ile etkileşim için tarayıcı eklentisi.

## Projeyi Çalıştırma Talimatları

1. Kodları kopyalayın ve açın.

2. Test hesabı oluşturmak için Ganache kullanın. Ganache'i indirin ve aşağıdaki kodu çalıştırarak hesaplarınızı ve bilgilerinizi görüntüleyin:

    ```
    ganache-cli
    ```

3. MetaMask'ınızı açın ve test için Ganache hesabınıza bağlı başka bir hesap ekleyin.

4. Token işlemleri için MetaMask'ı web sitemize bağlayın. Web sitemizdeki "METAMASK'I BAĞLA" düğmesine tıklayın.

5. Akıllı sözleşmenizi Truffle kullanarak dağıtın. Önce Truffle'ı yükleyin:

    ```
    npm install -g truffle
    ```

6. Kurulumdan sonra bu komutu çalıştırın:

    ```
    truffle deploy
    ```

7. Dağıtımdan sonra, sözleşme adresini terminalinizde göreceksiniz. Bu adresi ve ABI'yi alın ve bunları `main.js` dosyanıza yapıştırın.

8. Artık doğru adres ve ABI ile sözleşmenizin fonksiyonlarını kullanabilirsiniz. Web sitemizdeki "Rezervasyon" düğmesine tıklayın ve MetaMask tarafından işlem için izin istendiğinde izin verin.


## Teşekkürler

UniChain projesini kullanarak, blockchain teknolojisinin avantajlarını keşfetmeye hazır olun. Daha fazla yardım veya soru için lütfen destek ekibimizle iletişime geçin.

**Proje Ekibi:**
- Nermin Beyzanur Evcen  
  Email: beyzaevceen@gmail.com

- Fatmatüzzehra Öztürk  
  Email: fzehraozturk34@gmail.com

UniChain ekibi olarak, güvenli, şeffaf ve kullanıcı dostu bir deneyim yaşamanızı dileriz!

