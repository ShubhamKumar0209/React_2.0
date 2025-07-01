import React,{useId} from 'react'
function InputBox({
  label,
  amount,
  onAmountChange,
  onCurrencyChange,
  currencyOptions = [],
  selectCurrency = "usd",
  amountDisable = false,
  currencyDisable = false,
  inputStyle = {},
  selectStyle = {},
}) {
  const id = useId();
  return (
    <div className="bg-white text-sm p-3 rounded-lg shadow-sm flex items-center">
      <div className="w-1/2">
        <label htmlFor={id}>{label}</label>
        <input
          id={id}
          type="number"
          value={amount}
          onChange={e => onAmountChange && onAmountChange(Number(e.target.value))}
          className="w-full p-2 border rounded bg-transparent"
          style={inputStyle}
          placeholder="Enter amount"
          disabled={amountDisable}
        />
      </div>
      <div className="w-1/2 flex flex-wrap justify-end text-right items-center">
        <p className="mb-1">Currency Type</p>
        <select
          className="rounded-lg px-1 py-1 bg-light cursor-pointer"
          style={selectStyle}
          value={selectCurrency}
          onChange={e => onCurrencyChange && onCurrencyChange(e.target.value)}
          
          disabled={currencyDisable}
        >
          {currencyOptions.map(currency => (
            <option key={currency} value={currency}>
              {currency}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}

export default InputBox;
