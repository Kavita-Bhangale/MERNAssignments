import axios from 'axios';
import { useState } from 'react';
import {Button, Col, Form, Row} from 'react-bootstrap';


const instance = axios.create(
  {
          baseURL: "",
          withCredentials: false,
          headers: {
            'Access-Control-Allow-Origin' : '*',
            'Access-Control-Allow-Methods':'GET,PUT,POST,DELETE,PATCH,OPTIONS',
            'Access-Control-Allow-Headers': 'Origin, X-Api-Key, X-Requested-With, Content-Type, Accept, Authorization'   
        }
    })

const Login = () => {
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const loginCheck = () => {
        console.log("email,password : ",email,password);
        instance.post('http://localhost:3001/users/signin',{email,password})
        .then((res) => {
            console.log(res.data.token);
            if(res.data && res.data.token)
              localStorage.setItem(res.data.token);
        }).catch((e) => {
          console.log(e);
        })

    }

    return <>
    <Form>
      <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
        <Form.Label column sm="2">
          Email
        </Form.Label>
        <Col sm="10">
          <Form.Control type="text" onChange={(e) => setEmail(e.target.value)} placeholder="email@example.com" />
        </Col>
      </Form.Group>

      <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
        <Form.Label column sm="2">
          Password
        </Form.Label>
        <Col sm="10">
          <Form.Control type="password" onChange={(e) => setPassword(e.target.value)} placeholder="Password" />
        </Col>
      </Form.Group>

      <Form.Group as={Row} className="mb-3">
        <Col sm={{ span: 10, offset: 2 }}>
          <Button type="button" onClick={() => loginCheck()}>Sign in</Button>
        </Col>
      </Form.Group>
    </Form>
    </>
}

export default Login;