import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; 
import Product from './components/Product';
import Featured from './pages/Featured';

function App() {
  return (
    <Router>
      <Routes> 
        <Route path="/" element={<Product />} />
        <Route path="/featured" element={<Featured />} />
      </Routes>
    </Router>
  );
}

export default App;