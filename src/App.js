import logo from './source_files/logo.svg';
import './App.css';
import Neke from './fragment1/Neke.jsx';
import Frag from './fragment12/Frag.jsx';
import {useState} from 'react';


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
        <Neke></Neke>
        <Frag></Frag>
      </header>
    </div>
  );
}

export default App;
