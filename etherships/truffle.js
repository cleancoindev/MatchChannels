require('babel-register');
require('babel-polyfill');

const dotenv           = require('dotenv').config();
const HDWalletProvider = require('truffle-hdwallet-provider-privkey');


const mnemonic = process.env.ETHEREUM_ACCOUNT_MNEMONIC;

module.exports = {
  networks: {
    kovan: {
      provider: function() {
        return new HDWalletProvider(mnemonic, `https://kovan.infura.io/`);
      },
      network_id: '42',
      gasPrice: 1000000000
    },
    rinkeby: {
      provider: function() {
        return new HDWalletProvider(mnemonic, 'https://rinkeby.infura.io/');
      },
      network_id: '4',
    },
    test: {
      provider: function() {
        return new HDWalletProvider(mnemonic, 'http://127.0.0.1:8545/');
      },
      network_id: '*',
    },
  },
  compilers: {
    solc: {
      version: "0.4.24"  // ex:  "0.4.20". (Default: Truffle's installed solc)
  }
}

}