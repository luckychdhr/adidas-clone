import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/men" element={<div>Men's Products</div>} />
        <Route path="/women" element={<div>Women's Products</div>} />
        <Route path="/kids" element={<div>Kids' Products</div>} />
        <Route path="/sale" element={<div>Sale Products</div>} />
      </Routes>
    </Router>
  );
}

export default App;
