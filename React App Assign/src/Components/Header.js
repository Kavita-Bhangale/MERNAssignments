import { Logo } from "./Logo";

// When single component is present in one file then use default type of export
const Header = () => { // function Component definition type 2
    return(
        <header className="App-header">
            <Logo width={200}/>{/*width is a property */}
            <h1> Welcome to my very first react app</h1>
            <hr/>
        </header>
    )
}


export default Header;