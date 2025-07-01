import './App.css';
import InputBox from './components/InputBox';
import useCurrencyInfo from './hooks/useCurrencyInfo';
import { useState } from 'react';

function App() {
  const [amount, setAmount] = useState("");
  const [from, setFrom] = useState("usd");
  const [to, setTo] = useState("inr");
  const [convertedAmount, setConvertedAmount] = useState(0);
  const currencyInfo = useCurrencyInfo(from);
  const options = Object.keys(currencyInfo);
  const swap = () => {
    setFrom(to);
    setTo(from);
    setAmount(convertedAmount);
    setConvertedAmount(amount);
    convert();
  }
  const convert = () => {
    setConvertedAmount((amount && !isNaN(amount) ? amount : 0) * currencyInfo[to])
  }
  return (options.length===0)?<div className='text-center text-white'>Loading...</div>:(
    <div
      style={{
        minHeight: "100vh",
        width: "100vw",
        backgroundImage: `url('https://images.pexels.com/photos/2478248/pexels-photo-2478248.jpeg')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <div className="w-full min-vh-100 d-flex align-items-center justify-content-center" style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }}>
        <div
          className="mx-auto"
          style={{
            background: 'rgba(255, 255, 255, 0.26)',
            padding: '2rem',
            borderRadius: '1rem',
            boxShadow: '0 4px 24px rgba(0,0,0,0.2)',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            width: 'auto',
            minWidth: '350px',
            maxWidth: '580px',
          }}
        >
          <form onSubmit={(e) => {
            e.preventDefault();
            convert();
          }}>
            <div className="w-full mb-3 d-flex justify-content-center">
              <InputBox value={amount} label="From"
                amount={amount}
                onAmountChange={(value) => setAmount(value === 0 ? "" : value)}
                onCurrencyChange={(currency) => setFrom(currency)}
                selectCurrency={from}
                currencyOptions={options}
                inputStyle={{ width: '450px', height: '48px', fontSize: '1.2rem', textAlign: 'center' }}
              />
            </div>
            <div className="d-flex justify-content-center mb-3 gap-3">
              <button className="bg-secondary text-white py-2 px-4 rounded" type="button" onClick={swap}>Swap</button>
              <button className="bg-success text-white py-2 px-4 rounded" type="submit">Convert</button>
            </div>
            <div className="w-full mb-3 d-flex justify-content-center">
              <InputBox value={convertedAmount}
                label="To"
                amount={convertedAmount}
                onAmountChange={(value) => setConvertedAmount(value)}
                onCurrencyChange={(currency) => setTo(currency)}
                selectCurrency={to}
                currencyOptions={options}
                inputStyle={{ width: '450px', height: '48px', fontSize: '1.2rem', textAlign: 'center' }}
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
