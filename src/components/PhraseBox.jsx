/* eslint-disable react/prop-types */
import { useState } from 'react';
import '../App.css'

const PhraseBox = ({ seedPhrase }) => {
    const [isPhraseHidden, setIsPhraseHidden] = useState(false);
    const [copied, setCopied] = useState(false)

    const handleCopy = (seedPhrase) => {
        setCopied(true)
        navigator.clipboard.writeText(seedPhrase);
        setTimeout(() => setCopied(false), 2000)
    }

    return (
        <p>
            <span className={`${isPhraseHidden ? 'hidden' : 'phrase'}`}>
                <strong>Seed Phrase:</strong> {seedPhrase}
                <span className='hide-phrase' onClick={() => setIsPhraseHidden(true)}>Hide</span>
                <span className='copy-phrase' onClick={() => handleCopy(seedPhrase)}>{copied ? 'Copied' : 'Copy'}</span>
            </span>
        </p>
    )
}

export default PhraseBox