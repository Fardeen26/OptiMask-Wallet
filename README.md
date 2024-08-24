# OptiMask

OptiMask is a MetaMask-like environment that allows users to interact with the Ethereum blockchain seamlessly. With OptiMask, users can generate a mnemonic seed phrase, create multiple wallets, check their wallet balances, and even send transactions to other addresses.

## Features

- **Mnemonic Generation**: Generate a 12-word mnemonic seed phrase for secure wallet creation.
- **Multi-Wallet Support**: Create multiple wallets under a single mnemonic, each with its own address and private key.
- **Balance Checking**: Easily check the balance of each wallet in ETH.
- **Send Transactions**: Transfer ETH from your wallet to another Ethereum address with ease.
- **Clean UI**: A clean and responsive interface designed for ease of use.

## Tech Stack

- **Frontend**: React, JavaScript
- **Blockchain Interaction**: ethers.js
- **API**: Alchemy API for blockchain data
- **Styling**: CSS

## Installation

1. **Clone the repository**:
```
   git clone https://github.com/Fardeen26/OptiMask-Wallet.git
```
```
   cd OptiMask-Wallet
```

2. **Install dependencies**:
```
    npm install
```

3. **Set up environment variables:**:
- Create a .env file in the root directory.
- Add your Alchemy API key to the .env file:
```
VITE_ALCHEMY_RPC_URL=https://eth-sepolia.g.alchemy.com/v2/your-api-key
```

4. **Run the project**:
```
npm run dev
```

## Usage
1. **Generate a Seed Phrase**: Click the "Generate Seed Phrase" button to create a new mnemonic.
2. **Create a Wallet**: Use the generated seed phrase to create a new wallet.
3. **Check Balance**: Select a wallet from the dropdown to view its balance in ETH.
4. **Send Transactions**: Click "Send" to open the transaction form, enter the recipient's address, and the amount to send.


## Future Enhancements
- **Multi-Chain Support**: Expand the wallet to support multiple blockchain networks.
- **Transaction History**: Display a list of past transactions for each wallet.
- **Wallet Import**: Import existing wallets using private keys or JSON files.

## Acknowledgments
- **ethers.js**: For providing an easy-to-use library for interacting with the Ethereum blockchain.
- **Alchemy**: For offering a reliable API to access blockchain data.
