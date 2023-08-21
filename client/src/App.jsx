import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Import Routes
import Product from './components/Product';
import Featured from './pages/Featured';

function App() {
  return (
    <Router>
      <Routes> {/* Use Routes instead of Switch */}
        <Route path="/" element={<Product />} />
        <Route path="/featured" element={<Featured />} />
      </Routes>
    </Router>
  );
}

export default App;