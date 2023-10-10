import React, { useState } from 'react';
import Currency_option from './Currency_option';


const Currency_converter = () => {
    const [amount, setAmount] = useState(1)
    const [fromCurrency, setFromCurrency] = useState("USD");
    const [toCurrency, setToCurrency] = useState("EUR");
    const [result, setResult] = useState(0)

    const handleAmountChange = (e) => {
        setAmount(e.target.value)
    }

    const handlefromCurrencyChange = (currency) => {
        setFromCurrency(currency)
    }

    const handleToCurrencyChange = (currency) => {
        setToCurrency(currency)
    }

    const converter = () => {
        const exchangeRates = {
            USD: 1.0,
            EUR: 0.85,
            GBP: 0.73,
            JPY: 110.61,
            INR: 80
        };
        const exchangeRate = exchangeRates[toCurrency]/ exchangeRates[fromCurrency]
        const convertedAmount = amount * exchangeRate;
        setResult(convertedAmount)
    }
    return (
        <div>
            <h1>Currency Converter</h1>
            <div>
                <input type="number" value={amount} onChange={handleAmountChange} />
                <select value={fromCurrency} onChange={(e) => handlefromCurrencyChange(e.target.value)}>
                    <Currency_option currency="USD" onSelect={handlefromCurrencyChange}/>
                    <Currency_option  currency="EUR" onSelect={handlefromCurrencyChange}/>
                    <Currency_option currency="GBP" onSelect={handlefromCurrencyChange}/>
                    <Currency_option  currency="JPY" onSelect={handlefromCurrencyChange}/>
                    <Currency_option currency="INR" onSelect={handlefromCurrencyChange}/>
                </select>
                <span>to</span>
                <select value={toCurrency} onChange={(e) => handleToCurrencyChange(e.target.value)}>
                    <Currency_option currency="EUR" onSelect={handleToCurrencyChange}/>
                    <Currency_option currency="USD" onSelect={handleToCurrencyChange}/>
                    <Currency_option currency="GBP" onSelect={handlefromCurrencyChange}/>
                    <Currency_option  currency="JPY" onSelect={handlefromCurrencyChange}/>
                    <Currency_option  currency="INR" onSelect={handlefromCurrencyChange}/>
                </select>
                <button onClick={converter}>Convert</button>
            </div>
            <div>
                <p>Result: {result.toFixed(2)}</p>
            </div>
        </div>
    )
}

export default Currency_converter
