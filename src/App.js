import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/header/Header';
import Dashboard from './components/index/Dashboard';
import Footer from './components/footer/Footer';
import About from './components/about/About';
import Contact from './components/contact/Contact';
import Services from './components/service/Services';
import Career from './components/career/Career';

function App() {
  return (
    <Router>
      <>
        <Header />
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/service/*" element={<Services />} />
          <Route path="/career" element={<Career />} />
        </Routes>
        <Footer />
      </>
    </Router>
  );
}

export default App;
