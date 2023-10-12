//exporting props from functional component
// export const TestAppProps = (props) => {
//     return(
//         <div>Props from parent 
//             {props.companyName}
//         </div>
//     )
// }

import React, { Component } from "react";
import TestAppGrandChild from "./TestAppGrandChild";

class TestAppProps extends Component{
    constructor(props){
        super();
    }

    render(){
        return(
            <div>Some props from parent : {this.props.companyName}
            <TestAppGrandChild companyName={this.props.companyName}/>
            </div>
        )
    }
}

export default TestAppProps;