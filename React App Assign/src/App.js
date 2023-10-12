import { BottomContent, Content as Maincontent} from "./Components/Content"; 
import CountState from "./Components/CountState";
import { Footer } from "./Components/Footer";
import Header from "./Components/Header";
import MyClassComponent from "./Components/MyClassComponent";
import TestApp from "./Components/TestApp";
// Content() when curly brackets are given then it is a simple export of component from other file
// Alias name can be used for simple export of component like Content can work as Maicontent
// Header() when curly brackets are not given then it is a default export of component from other file 

function App() {
  return (
    // importing different types of components
    <div className="App">
      {/* <Header />
      <MyClassComponent />
      <Maincontent />
      <BottomContent />
      <Footer />  */}
      {/* <TestApp /> */}
      <CountState />
    </div>
  );
}
//Content()- Component call is not a function call but similer to that

export default App;
//Component -> App Component
