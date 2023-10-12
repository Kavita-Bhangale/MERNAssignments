import axios from "axios";
import { useState } from "react";

const Register = () => {

    const [email, setEmail] = useState("test@test.com");
    const [name, setName] = useState();
    const [password, setPassword] = useState();



    const registerHandler = () =>{
          console.log("registerHandler called");
          console.log(email,name,password);
          axios.post("https://reqres.in/api/register", {email,password})
          .then((res)=> {
                console.log("Register res: "+res);
          })
    }

    return(
        <div>
            <h1>Register</h1>
            <input type = "email" placeholder="Enter Email" onChange={(obj) => setEmail(obj.target.value)} value={email}></input>
            <input type = "text" placeholder="Enter Name" onChange={(obj) => setName(obj.target.value)} value={name}></input>
            <input type = "password" placeholder="Enter Password" onChange={(obj) => setPassword(obj.target.value)} value={password}></input>
            <button onClick = {() => registerHandler()}>Register</button>
        </div>
    )
}

export default Register;