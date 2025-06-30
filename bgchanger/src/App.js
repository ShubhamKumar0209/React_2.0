
import './App.css';
import { useState } from 'react';

function App() {
  const [bgColor, setBgColor] = useState("white");

  return (
    <>
    <div className="container-fluid" style={{ backgroundColor: bgColor, height: '100vh', width: '100vw', transition: 'background-color 0.5s ease' }}>
    </div>
    <div className="position-fixed bottom-0 w-100 bg-light text-white p-2 d-flex justify-content-center gap-3">
      <button className="outline-none border-0 px-4 py-2 rounded-circle" style={{ backgroundColor: 'lightcoral',color:'white'}} onClick={()=> setBgColor("lightcoral")}>lightcoral</button>
      <button className="outline-none border-0 px-4 py-2 rounded-circle" style={{ backgroundColor: 'lightgreen',color:'white'}} onClick={()=> setBgColor("lightgreen")}>lightgreen</button>
      <button className="outline-none border-0 px-4 py-2 rounded-circle" style={{ backgroundColor: 'lightblue',color:'white'}} onClick={()=> setBgColor("lightblue")}>lightblue</button>
      <button className="outline-none border-0 px-4 py-2 rounded-circle" style={{ backgroundColor: 'lavender',color:'white'}} onClick={()=> setBgColor("lavender")}>lavender</button>
      <button className="outline-none border-0 px-4 py-2 rounded-circle" style={{ backgroundColor: 'pink',color:'white'}} onClick={()=> setBgColor("pink")}>pink</button>
    </div>
  </>
  );
}

export default App;
