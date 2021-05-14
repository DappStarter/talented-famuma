require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const WalletProvider = require('./src/lib/wallet-provider');


let mnemonic = 'inner arena bone table edge rare remain slow hope problem flame gesture'; 
let testAccounts = [
"0x417389766783959daa2322dc027d391f59402808f7d6144598844d948981f41c",
"0x5c86a71a6518a091566acff9fb980e413122359b5728e393d4a63d9165d765f5",
"0xe3d14e29b40f13c89f4816acbd616e9e03c2387eea8f0eaf2a5cd51143d97f4d",
"0xe98be3d38d409768507cbd976f5b9efd43e751c62197605f3c2d6ece4ddc15df",
"0x23cc61668fa2274a65b1039c96b358936ac145753ddfc50db3d2eae0666c56b2",
"0x2db8f55ced91e79c606c6e5d543b6c2208d67c57d7a2cce6427885a9b3573392",
"0xddd8e11329986744afdcc73a8a3a962dd94b3db76d362031103434437891a4eb",
"0x8cd880bf89de6a8447b2eb914ff94d008cb24824401cb58b71b5ff693d637d5b",
"0x94dbe9d7e7f7a427f8aaf6c91d9c60e83bc730894e20a3998c7a51eca84c9e79",
"0x0f55a83fc2ed44194bc50f5f9721b4840fb4d9df6acd43377a26be86f54a9532"
]; 
let devUri = 'https://test.confluxrpc.org/v2';
let host = devUri.replace('http://','').replace('https://','');
let privateKeys = new WalletProvider(mnemonic, 10).privateKeys;

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            network_id: '*',
            host,
            port: 80,
            type: "conflux",
            privateKeys,
            walletProvider: () => new WalletProvider(mnemonic, 10)
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

