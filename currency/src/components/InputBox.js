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
    <div className="bg-white small p-3 rounded shadow-sm d-flex align-items-center">
      <div className="w-50">
        <label htmlFor={id}>{label}</label>
        <input
          id={id}
          type="number"
          value={amount}
          onChange={e => onAmountChange && onAmountChange(Number(e.target.value))}
          className="form-control bg-transparent"
          style={inputStyle}
          placeholder="Enter amount"
          disabled={amountDisable}
        />
      </div>
      <div className="w-50 d-flex flex-wrap justify-content-end text-end align-items-center">
        <select
          className="form-select ms-2"
          style={selectStyle}
          value={selectCurrency}
          onChange={e => onCurrencyChange && onCurrencyChange(e.target.value)}
          disabled={currencyDisable}
        >
          {currencyOptions.map((currency) => (
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
