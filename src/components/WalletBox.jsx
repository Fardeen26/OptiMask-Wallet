/* eslint-disable react/prop-types */
import TransactionForm from './TransactionForm'

const WalletBox = ({ wallets, selectedWalletIndex, handleChange, walletBalance, selectedWallet, isTransactionForm, setIsTransactionForm }) => {
    const handleTransaction = () => {
        setIsTransactionForm(true)
    }

    return (
        <div className='account'>
            <div className="account-box">
                {wallets.length ? (
                    <>
                        <label className='select'>
                            <select
                                id="input-select"
                                value={selectedWalletIndex}
                                onChange={handleChange}
                            >
                                {wallets.map((wallet, index) => (
                                    <option value={index} key={index}>
                                        Wallet {index + 1}
                                    </option>
                                ))}
                            </select>
                        </label>

                        <div className='address'>
                            <p>Address: {wallets[selectedWalletIndex].address}</p>
                        </div>

                        <hr style={{ width: '400px' }} />

                        <div className="eth-amount">
                            <h2>{walletBalance} ETH</h2>
                        </div>
                    </>
                ) : 'No Wallets Yet'}


                {wallets.length ? (
                    <div className="send-buttons">
                        <button onClick={handleTransaction} className='send-button'>Send</button>
                        <a href="https://cloud.google.com/application/web3/faucet/ethereum/sepolia" target="_blank"> <button className='send-button' style={{ marginLeft: '10px' }}> Get Faucets</button></a>
                    </div>
                ) : ''}

                <div className={`${isTransactionForm ? 'block' : 'hidden'}`}>
                    <TransactionForm selectedWallet={selectedWallet} walletBalance={walletBalance} />
                </div>

            </div>
        </div>
    )
}

export default WalletBox