import { useState } from "react";
import { ethers } from 'ethers';
import { Toaster, toast } from 'sonner'
import './TransactionForm.css'

// eslint-disable-next-line react/prop-types
const TransactionForm = ({ selectedWallet, walletBalance }) => {
    const [recipient, setRecipient] = useState('');
    const [amount, setAmount] = useState('');
    const [error, setError] = useState('');
    const [isSending, setIsSending] = useState(false);

    const sendTransaction = async (recipient, amount) => {
        if (selectedWallet && walletBalance > 0 && amount && recipient) {
            setIsSending(true)
            const provider = new ethers.JsonRpcProvider(import.meta.env.VITE_ALCHEMY_RPC_URL);
            // eslint-disable-next-line react/prop-types
            const wallet = new ethers.Wallet(selectedWallet.privateKey, provider);

            const transaction = {
                to: recipient,
                value: ethers.parseUnits(amount, 'ether'),
            };


            try {
                const txResponse = await wallet.sendTransaction(transaction);
                await txResponse.wait();
                toast.success(`Transaction is Successful! ${txResponse.hash}`)
                setIsSending(false)
                console.log('Transaction successful:', txResponse);
            } catch (error) {
                console.error('Transaction failed:', error);
            }
        }
        else {
            if (recipient == '' || amount == '') {
                setError('Please enter the details!')
            } else if (walletBalance < 1) {
                setError('not enough ETH! first get some ETH')
            } else {
                setError('Please select a wallet!')
            }
            setIsSending(false)
            setTimeout(() => setError(''), 2000)
        }
    };

    return (
        <div className="form-container">
            <Toaster expand={true} />
            <form onSubmit={(e) => { e.preventDefault(); sendTransaction(recipient, amount); }} className="trans-form">
                <input
                    type="text"
                    placeholder="Recipient Address"
                    value={recipient}
                    onChange={(e) => setRecipient(e.target.value)}
                    className="tarns-input"
                />
                <input
                    type="text"
                    placeholder="Amount in ETH"
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                    className="tarns-input"
                />
                <button type="submit" className="trans-button">{isSending ? 'Sending...' : 'Send Transaction'}</button>
                {error ? <p style={{ fontSize: '12px', color: 'red' }}>{error}</p> : ''}
            </form>
        </div>
    )
}

export default TransactionForm