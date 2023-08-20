import { React } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Product from './components/Product';
import Featured from './pages/Featured';

function App() {

  return (
    <>
      <Router>
      <Switch>
        <Route path="/" exact component={Product} />
        <Route path="/featured" component={Featured} />
      </Switch>
    </Router>
    </>
  )
}

export default App
