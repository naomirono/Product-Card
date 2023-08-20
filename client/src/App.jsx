import { React } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Product from './components/Product';
import Featured from './pages/Featured';

function App() {

  return (
    <>
      <Product/>
      <Featured/>
    </>
  )
}

export default App
