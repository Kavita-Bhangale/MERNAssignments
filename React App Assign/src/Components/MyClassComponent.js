//import {Component} from 'react'; //Compulsory for class component
//or
import React from 'react';

//class MyClassComponent extends Component{ // Class Component definition
//or
class MyClassComponent extends React.Component{
    constructor(){
        super();
        this.state = {
            name : 'ABC'
        }
    }
    componentDidMount(){
        console.log("Component is mounted");
    }

    componentDidUpdate(){
        console.log("Component is updated")
    }

    componentWillUnmount(){
        console.log("Component is Unmounted");  
    }

    changeName = () => {
        console.log("Button is clicked")
        this.setState({name:'XYZ'});
    }
    render(){
        return(
            <div>
                {console.log("render method executed")}
                <p>My Class Component {this.state.name}</p>
                <button onClick={this.changeName}>Change Name</button>
                <hr/>
            </div>
        )
    }
}

export default MyClassComponent;