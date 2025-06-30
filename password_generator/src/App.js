
import { useState, useCallback, useEffect, useRef } from 'react';
import './App.css';

function App() {
  const [length, setLength] = useState(8);
  const passwordRef = useRef(null);
  const [numberAllowed, setNumberAllowed] = useState(true);
  const [characterAllowed, setCharacterAllowed] = useState(true);
  const [password, setPassword] = useState('');
  const passwordGenerator = useCallback(() => {
    let pass = '';
    let str = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    if (numberAllowed) str += "0123456789";
    if (characterAllowed) str += "!@#$%^&*()_+[]{}|;:,.<>?";
    for (let i = 1; i <= length; i++) {
      const randomIndex = Math.floor(Math.random() * str.length);
      pass += str.charAt(randomIndex);
    }
    setPassword(pass);
  }, [length, numberAllowed, characterAllowed, setPassword]);
  useEffect(() => {
    passwordGenerator();
  }, [length, numberAllowed, characterAllowed, passwordGenerator]);
  const copyPassword = useCallback(() => {
    passwordRef.current?.select();
    window.navigator.clipboard.writeText(password);
  }, [password]);
  return (
    <>
      <div className="container-fluid text-white bg-dark rounded-3" >
        <h2 className='text-center'>Password Generator</h2>
        <div className="d-flex justify-content-center gap-3 rounded-3">
          <input style={{ color: 'orange', background: 'lightgrey' }} type="text" value={password} readOnly placeholder='password' size={Math.max(password.length, 8)}
            ref={passwordRef} />
          <button className="btn btn-primary" style={{ transition: 'background 0.3s, color 0.3s' }}
            onMouseOver={e => {
              e.target.style.background = '#198754';
              e.target.style.color = '#fff';
            }}
            onMouseOut={e => {
              e.target.style.background = '';
              e.target.style.color = '';
            }} onClick={copyPassword}>Copy</button>
        </div>
        <div className="d-flex justify-content-center gap-3 rounded-3">
          <div className="flex items-center gap-x-1">
            <input type="range" min={6} max={100} value={length}
              className="cursor-pointer"
              onChange={(e) => setLength(e.target.value)}
            />
            <label>Length: {length}</label>
          </div>
          <div className="flex items-center gap-x-1">
            <input type="checkbox" defaultChecked={numberAllowed}
              id="numberInput"
              onChange={(e) => setNumberAllowed(e.target.checked)} />
            <label htmlFor="numberInput">Include Numbers</label>
          </div>
          <div className="flex items-center gap-x-1">
            <input type="checkbox" checked={characterAllowed} onChange={(e) => setCharacterAllowed(e.target.checked)} />
            <label>Include Special Characters</label>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
