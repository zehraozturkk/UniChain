module.exports = {
  networks: {
    development: {
      host: "127.0.0.1",
      port: 7545,
      network_id: "*",
    },
    // Diğer ağ konfigürasyonlarını ekleyebilirsiniz.
  },
  mocha: {
    // timeout: 100000
  },
  // Configure your compilers
  compilers: {
    solc: {
      version: "0.8.13",
      settings: {
        optimizer: {
          enabled: true,
          runs: 200
        }
      },
      evmVersion: "istanbul"
    }
  }
};
