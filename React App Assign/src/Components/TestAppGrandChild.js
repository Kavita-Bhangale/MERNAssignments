import React from "react";

class TestAppGrandChild extends React.Component{
    constructor(){
        super();
    }

    componentDidUpdate(){
        console.log('child-grandchild updated');
    }
    render(){
        return(
            <div>Parent - Child - Grandchild {this.props.companyName}</div>
        )
    }
}

export default TestAppGrandChild;