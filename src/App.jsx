import React, { useState } from 'react';
import { ethers } from 'ethers';
import './App.css'

const App = () => {
  const [seedPhrase, setSeedPhrase] = useState('');
  const [wallets, setWallets] = useState([]);
  const [currentWallet, setCurrentWallet] = useState(null);

  const generateSeedPhrase = () => {
    const mnemonic = ethers.Mnemonic.entropyToPhrase(ethers.randomBytes(16));
    setSeedPhrase(mnemonic);
  };

  const createWalletFromSeed = () => {
    if (!seedPhrase) return;
    const hdNode = ethers.HDNodeWallet.fromPhrase(seedPhrase, `m/44'/60'/0'/0/${wallets.length}`);

    setWallets([...wallets, hdNode]);
    setCurrentWallet(hdNode);
  };

  const showPrivateKey = () => {
    if (currentWallet) {
      alert(`Private Key: ${currentWallet.privateKey}`);
    }
  };

  return (
    <>
      <div className="main">
        <div className="gradient" />
      </div>
      <div
        style={{
          padding: '20px',
          width: '97vw',
          height: '150vh',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'flex-start',
          zIndex: 5
        }}
        className='main gradiant'
      >
        <div>
          <h1>Ethereum Wallet Generator</h1>

          {seedPhrase ? '' : (
            <div style={{ display: 'flex', justifyContent: 'center' }}>
              <button onClick={generateSeedPhrase} style={{ marginBottom: '10px' }}>
                Generate Seed Phrase
              </button>
            </div>
          )}

          {seedPhrase && (
            <p>
              <strong>Seed Phrase:</strong> {seedPhrase}
            </p>
          )}

          {seedPhrase ? (
            <div className="details">
              <div style={{ display: 'flex', justifyContent: 'center' }}>
                <button onClick={createWalletFromSeed} style={{ marginBottom: '10px' }}>
                  {wallets.length ? `Add Account ${wallets.length + 1}` : 'Create Account'}
                </button>
              </div>

              {currentWallet && (
                <div>
                  <p>
                    <strong>Address:</strong> {currentWallet.address}
                  </p>
                  <p>
                    <strong>Public Key:</strong> {currentWallet.publicKey}
                  </p>
                  <button onClick={showPrivateKey} style={{ marginBottom: '10px' }}>
                    Show Private Key
                  </button>
                </div>
              )}

              {wallets.length ? (
                <div className="">
                  <h2>All Accounts</h2>
                  <ul>
                    {wallets.map((wallet, index) => (
                      <li key={index}>
                        <strong>Account {index + 1}:</strong> {wallet.publicKey}
                      </li>
                    ))}
                  </ul>
                </div>
              ) : ''}

            </div>
          ) : (
            ''
          )}
        </div>
      </div>
    </>
  );
};

export default App;

// SOLANA

// import React, { useEffect } from 'react';
// import nacl from 'tweetnacl';
// import { generateMnemonic, mnemonicToSeedSync } from 'bip39';
// import { derivePath } from 'ed25519-hd-key';
// import { Keypair } from '@solana/web3.js';

// const App = () => {

//   useEffect(() => {
//     const mnemonic = generateMnemonic();
//     const seed = mnemonicToSeedSync(mnemonic);

//     for (let i = 0; i < 4; i++) {
//       const path = `m/44'/501'/${i}'/0'`; // This is the derivation path
//       const derivedSeed = derivePath(path, seed.toString('hex')).key;
//       const secret = nacl.sign.keyPair.fromSeed(derivedSeed).secretKey;
//       console.log(Keypair.fromSecretKey(secret).publicKey.toBase58());
//     }
//   }, []);

//   return (
//     <div>
//       <h2>Key Generation</h2>
//       <p>Check the console for generated public keys.</p>
//     </div>
//   );
// };

// export default App;

