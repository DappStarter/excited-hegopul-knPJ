require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'grace seek surge trip film birth pave provide hunt lonely force genuine'; 
let testAccounts = [
"0xfbdea1f8b4c8748c43dc4b32f8b3568f17051e6636ba41ce0627a47d04b04dc4",
"0x6956f2bc8683a4f1b94e4a0396800fcca7c723f2a588e88d2cb59965d3aaf720",
"0xcbd42edda542e0e167296acadbdbd7337bbf2308a1efa06152692d933d6e7b32",
"0x8512b484acfdb06d5713ce83a940fcdb8b49f48b227786606a27ccae246a9618",
"0x4e3c1284fc9bd2b36280f1eb5aee3b7c7bd0588853509699a66450e4e2e66720",
"0x5c8c7478fe0b69cdd9a155b79f8932f67dca49e3b22568866828360dc0c17906",
"0x93aa0cbd4e785544cd58cf9edd0799cf17a62d7bb51c4df7b8085600adb3d60f",
"0x06078b8f328ae000efe56c3e5b3c7046cfa4bb891e8286a7aa7ab09700a6d7c4",
"0x34feb6558ceb44c872bab38356e799fa12b2c13edd6655fb6c34e7985ca17cf0",
"0x90aabdbee1ed38effc993d83785f92c671c30bc50cbcb58c63443c28063e473d"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

