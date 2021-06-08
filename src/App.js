import './App.css';
import Header from './containers/Header';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import ProductListing from './containers/ProductListing';
import NotFound from './containers/NotFound';
import ProductDetail from './containers/ProductDetail';

function App() {
  return (
    <div className="App container">

      <Router>
        <Header />
        <Switch>

          <Route path='/' exact component={ProductListing} />

          <Route path='/product/:productId' exact component={ProductDetail} />

          <Route path='*' component={NotFound} />

        </Switch>
      </Router>
      <footer className="border shadow m-5 p-5 d-flex justify-content-center">Copyright &copy; Shariful Pradhan Hridoy</footer>
    </div>
  );
}

export default App;
