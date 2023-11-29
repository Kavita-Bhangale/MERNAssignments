import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import Products from './Products';
import Header from './Header';
import Home from './Home';
import Product from './Product';
import Login from './Login';

function App() {
  return (
    <div>
    <Router>
    <Header />
      <Routes>
        <Route path='/' element = {<Home/>}></Route>
        <Route path='/products' element = {<Products/>}></Route>
        <Route path='/product/:pname' element = {<Product/>}></Route>
        <Route path='/login' element = {<Login/>}></Route>
      </Routes>
      </Router>
      </div>
  );
}

export default App;
