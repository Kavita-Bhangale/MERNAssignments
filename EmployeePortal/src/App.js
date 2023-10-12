import React, { useRef, useState } from 'react';
import './App.css';
import { Footer } from './footer';
import { ThemeContext } from './ThemeContext';
import Register from './components/Register';
import Login from './components/Login';
import{
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom'
import { Home } from './components/Home';
import { Routes } from 'react-router-dom';
import { Header } from './components/Header';
import { Employee } from './components/Employee';
import { Profile } from './components/Profile';
import { Logout } from './components/Logout';
import checkLogin from './components/CheckLogin';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  const [theme, setTheme] = useState('light');
  const inputRef = useRef();

  const applyTheme = () => {
      console.log(inputRef.current.value);
      setTheme(inputRef.current.value);
  }

  // class HOC calling
  const Emp = checkLogin(Employee);

 return (
    <div className="App">
      {/* <ThemeContext.Provider value = {theme}> how to send single variable to context */}
      <ThemeContext.Provider value = {{theme, employeeData: {add1:'ASD', add2 : 123, city:'Delhi'}}}>
        {/* React router dom v6 */}
        <Router>

       <Header />

          <Routes>
            <Route path='/register' element={<Register />} />
            <Route path='/login' element={<Login />} />
            <Route path='/user-login' element={<Login />} />
            <Route path='/' element={<Home />}> 
            {/* react-router dom params example*/}
              {/* <Route path=':userName' element={<Home />} /> */}
            </Route>
            
            {/* <Route path='/employees' element={<Emp/>} /> {class HOC calling} */}
            <Route path='/employees' element={checkLogin(Employee)()} />
            <Route path='/employees/:id' element={<Profile/>} />
            <Route path='/logout' element={<Logout />} />
          </Routes>
          <hr/>
          <Footer />
          {/* React router dom v5 */}
          {/* <Switch>
            <Route path='/register' ><Register /></Route>
            <Route path='/login' ><Login /></Route>
            <Route path='/' ><Home /></Route>
          </Switch> */}
        </Router>
      
        {/* <input type='text' ref={inputRef} ></input>
        <button onClick={() => applyTheme()}>Apply</button>
      <Employee />
      <Footer /> */}
      {/* <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/register">Register</Link>
            </li>
            <li>
              <Link to="/login">Login</Link>
            </li>
          </ul>
        </nav> */}

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        {/* <Switch>
          <Route path="/register">
          <Register />
          </Route>
          <Route path="/login">
          <Login />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
       
        
      </Router> */}
      
      </ThemeContext.Provider>
      
      
    </div>
  );
}

export default App;
