import { useEffect, useState } from "react";
import axios from 'axios';
import { Link } from "react-router-dom";
import initials from "./initialsHoc";
import {Table} from "react-bootstrap";


export const Employee = () => {

    const [emplyees, setEmployees] = useState();

    useEffect(() => {
        axios.get("https://jsonplaceholder.typicode.com/users")
        .then((res) => {
            if(res.status == 200) {
                setEmployees(res.data);
            }
        })
    },[])

    useEffect(() => {
        if(sessionStorage.getItem("token")){
            console.log(sessionStorage.getItem("token"));
        }
    },[])

    return(
        <div>
             <Table striped bordered hover>
            <thead>
                <tr>
                <th>Emp Id</th>
                <th>Icon</th>
                <th>User Name</th>
                <th>Email</th>
                </tr>
            </thead>
            <tbody>
            {emplyees ? emplyees.map((emp) =>{
                return(
                    <tr key={emp.id}>
                        <td>{emp.id}</td>
                        <td>{initials(emp.username)()}</td>
                        <td><Link to={'/employees/' + emp.id}>{emp.username}</Link></td>
                        <td>{emp.email}</td>
                    </tr>
                )
                })
                : <h2>Please login first to see data </h2>}
                
            </tbody>
            </Table>



            {/* {emplyees ? emplyees.map((emp) =>{
                return <li key={emp.id}>Username :<Link to={'/employees/' + emp.id}> {emp.username} {initials(emp.username)()}</Link> EMail : {emp.email}</li>
            })
            : <h2>Please login first to see data </h2>} */}
        </div>
    )
}
