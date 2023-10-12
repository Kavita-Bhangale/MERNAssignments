import { useState } from "react";

// Use of state variable in functional component
// We have to use useState() method to use state variable 
const CountState = () => {
    const [count,setCount] = useState(0);  //[variable,set function] = useState() Hook
    const [company,setCompany] = useState('GFG');
    return(
        <div>
            <h2>Company name : {company}</h2>
            <button onClick={() => setCompany("My Company")}>Change</button>
            <h2>Count is : {count}</h2>
            <button onClick={() => setCount(count + 1)}>Increase</button>
        </div>
    )
}

export default CountState;