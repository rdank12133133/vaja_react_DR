import logo from './source_files/logo.svg';
import './App.css';
import Neke from './fragment1/Neke.jsx';
import Frag from './fragment12/Frag.jsx';
import {useState} from 'react';
import { Navbar } from 'react-bootstrap';
import { Route,Routes } from 'react-router-dom';


function App() {
  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Neke/>}/>
        <Route path="/frag" element={<Frag/>}/>
      </Routes>
    </div>
  );
}

export default App;
