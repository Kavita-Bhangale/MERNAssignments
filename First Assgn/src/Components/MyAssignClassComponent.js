import React from 'react';

class MyAssignClassComponent extends React.Component {
    constructor() {
        super();
        this.state = {
            name : "Click Here"
        }
    }


    componentDidMount(){
        console.log("componentDidMount method executed");
    }

    componentDidUpdate(){
        console.log("componentDidUpdate method executed");
    }

    componentWillUnmount(){
        console.log("componentWillUnmount method executed");
    }
    changeName = () => {
        console.log("after button is clicked");
        this.setState({name : "Learn React"})
    }

    render() {
        return (
            <div>
                {console.log("render method executed")}
                <p>Take a Tutorial</p>
                <button onClick={this.changeName}>{this.state.name}</button>
                </div>
        )
    }
}

export default MyAssignClassComponent;