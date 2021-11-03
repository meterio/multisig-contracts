require("dotenv").config();
const { TruffleProvider } = require("@harmony-js/core");
const HDWalletProvider = require("@truffle/hdwallet-provider")
//Local
const local_mnemonic = process.env.LOCAL_MNEMONIC;
const local_private_key = process.env.LOCAL_PRIVATE_KEY;
const local_url = process.env.LOCAL_0_URL;
//Testnet
const testnet_mnemonic = process.env.TESTNET_MNEMONIC;
const testnet_private_key = process.env.TESTNET_PRIVATE_KEY;
const testnet_url = process.env.TESTNET_0_URL;
//Mainnet
const mainnet_mnemonic = process.env.MAINNET_MNEMONIC;
const mainnet_private_key = process.env.MAINNET_PRIVATE_KEY;
const mainnet_url = process.env.MAINNET_0_URL;

//GAS - Currently using same GAS accross all environments
gasLimit = process.env.GAS_LIMIT;
gasPrice = process.env.GAS_PRICE;

module.exports = {
  networks: {
    local: {
      network_id: "5777",
      chain_id: 5777,
      provider: () => (
        new HDWalletProvider({
          privateKeys: [local_private_key],
          providerOrUrl: local_url
        })
      ),
      gas: 1000258612000000000,
    },
    testnet: {
      network_id: "101",
      provider: () => (
        new HDWalletProvider({privateKeys:[testnet_private_key], providerOrUrl:testnet_url})
      ),
    },
    mainnet: {
      network_id: "65",
      provider: () => (
        new HDWalletProvider({privateKeys:[testnet_private_key], providerOrUrl:testnet_url})
      ),
    },
  },

  // Configure your compilers
  compilers: {
    solc: {
      version: "0.7.4",
      settings: {
        optimizer: {
          enabled: true,
          runs: 9999,
        },
      },
    },
  },
};
