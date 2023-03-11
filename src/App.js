
import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './Components/Home';
import LoginWithLocalStorage from './Components/LoginWithLocalStorage';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginWithLocalStorage />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </BrowserRouter>
  )
   
}

export default App;
