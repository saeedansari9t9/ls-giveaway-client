import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Giveaway from './pages/Giveaway';

function App() {
  return (
    <Router>
      <div className="app-container">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/giveaway" element={<Giveaway />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
