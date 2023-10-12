import { useCallback, useEffect, useMemo, useState } from "react";
import { useParams } from "react-router-dom"
import { MemoizedPage } from "./Page";

{/* react-router dom params example*/ }
export const Home = () => {

    let { userName } = useParams();
    const [count, setCount] = useState(0);
    const price = 50;

    // Simple Function to calculate TAx
    const tax = (price) => {
        return price * 0.05 + price;
    }


    //use of useMemo Hook --- useMemo returns memoized value
   const finalprice = useMemo(() => tax(price),[price]);

    //use of useCallBack Hook ---- returns memoized function
    const finaldiscount = useCallback(() => price * 0.2,[])

    const onClick = () => {
        console.log("content button clicked");
    }
    // componentDidMount 
    // on component load
    useEffect(() => {
        console.log("useEffect");
    }, [])

     // on depnedencies update
    //componentDidUpdate
    useEffect(() => {
        console.log(count);
    }, [count])

    //componentWillUnmount
    useEffect(() => {
        return() => {
            console.log("Unmount");
        }
    }, [])



    return (
        <div>
            <h1>Welcome to home page, user: {userName}</h1>
            <button onClick={() => setCount(count + 1)}>Count</button><label><h2>&nbsp;&nbsp;&nbsp;{count}</h2></label><br/>
            <h4>Price : {finalprice}</h4> {/*for useMemo */}
            <h4 style={{color: 'red'}}>Discount : {finaldiscount(price)}</h4> {/*for useCallBack */}
            <MemoizedPage onClick = {onClick} />
        </div>
    )
}

