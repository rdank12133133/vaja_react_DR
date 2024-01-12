import logo from './source_files/logo.svg';
import './App.css';
import {useState} from 'react';
function Nekaj(){
  const [tekst,setTekst]=useState("originalni tekst")
  return(
    <>
    <div id='neke'>Tekst v Nekaj Funkciji</div>
    <p>nekaj nove</p>
    <button onClick={(e)=>(setTekst("tekst po klIKU"))}>klikni</button>
    <span>{tekst}</span>
    </>
  );
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <Nekaj/>
      </header>
    </div>
  );
}

export default App;
