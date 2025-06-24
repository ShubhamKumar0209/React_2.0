import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const [counter, setCounter] = useState(0);
  function Increment() {
    if(counter===20){
      setCounter(20);
    }
    else{
      setCounter(counter + 1);
    }
  }
  function Decrement() {
    if(counter === 0) {
      setCounter(0);
    }
    else{
      setCounter(counter - 1);
    }
  }
  const Reset = () => {
    setCounter(0);
  }
  return (
    <>
    <h1>Counter App</h1>
    <h3>Counter value: {counter}</h3>
    <button className="btn" onClick={Increment}>Increment</button>
    <br></br>
    <button className="btn" onClick={Decrement}>Decrement</button>
    <br></br>
    <button className="btn" onClick={Reset}>Reset</button>
    </>
  );
}

export default App;
