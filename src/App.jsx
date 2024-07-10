import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar/Navbar.jsx';
import Home from './pages/Home/Home.jsx';
import Catalogue from './pages/Catalogue/Catalogue.jsx';
import Contact from './pages/Contact-us/Contact-us.jsx';
import whatsapplogo from './assets/whatsapplogo.png';
import Header from './components/Header /Header.jsx';

function App() {
  return (
    <>
      <BrowserRouter>
      <Header/>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/catalogue" element={<Catalogue />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>
      <div className="fixed bottom-3 right-3 p-3 z-10">
        <a 
          href="https://wa.me/?text=Hello How Can I help you ?" 
          target="_blank" 
          rel="noopener noreferrer"
          className="whatsapp-button flex items-center space-x-2 p-4 bg-green-500 text-white rounded-full shadow-lg hover:bg-green-600 transition transform hover:scale-110"
        >
          <img src={whatsapplogo} width="30" alt="WhatsApp Logo" />
          <span>Click here to WhatsApp</span>
        </a>
      </div>
    </>
  );
}

export default App;
