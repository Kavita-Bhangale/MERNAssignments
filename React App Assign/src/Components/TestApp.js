import React from "react";
import TestAppProps  from "./TestAppProps";

class TestApp extends React.Component{
    //Define the state
    //State helps Carry data within component
    //state holds current state of variables
    //stste helps you re-render the application
    //state can be updated using setState method
    state = {
        company : 'GFG'
    };

    componentDidMount(){
        //Changigng the state after 2 seconds
        setTimeout(() =>{
            this.setState({company : 'GeeksForGeeks'});
        }, 2000);
    }

    componentDidUpdate(){
        document.getElementById('disclaimer').innerHTML = 
        'P.s: GFG is also known as ' + this.state.company;
    }

    render(){
        return(
            <div>
                <h1 style={{
                    margin: 'auto',
                    width: '50%',
                    padding: 20,
                    marginTop: '10%',
                    border: 'solid 1px black',
                    textAlign: 'center',
                    fontSize: 18
                }}>
                    Geartest Science Portal for Geeks : {this.state.company}
                    <div id='disclaimer'></div> 
                </h1>
                <hr/>
                <TestAppProps companyName = {this.state.company} />
            </div>

        )
    }
}

export default TestApp;