import logo from './logo.svg';
import './App.css';
import FirstHeader from './Components/FirstHeader';
import MyAssignClassComponent from './Components/MyAssignClassComponent';
import { BottomContent, MiddleContent, TopContent } from './Components/MyAssignContents';
import FirstFooter from './Components/FirstFooter';
import MyAssignFunctionalComponent from './Components/MyAssignFunctinalComponent';

function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}

      <FirstHeader />
      <MyAssignClassComponent />
      <MyAssignFunctionalComponent />
      <TopContent />
      <MiddleContent />
      <BottomContent />
      <FirstFooter />



    </div>
  );
}

export default App;
