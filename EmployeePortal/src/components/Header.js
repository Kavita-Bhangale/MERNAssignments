import { Link } from "react-router-dom"

import {Container,
        Nav,
        Navbar,
        NavDropdown } from 'react-bootstrap';

export const Header = () => {
    return (
        <div>
            {/* <Link to="/">Home</Link>
            <Link to="/register">Register</Link>
            <Link to="/login">Login</Link>
            <Link to="/employees">Employee List</Link>
            <Link to="/logout">LogOut</Link> */}

<Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">React-Employee</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to = "/">Home</Nav.Link>
            <Nav.Link as={Link} to = "/register">Register</Nav.Link>
            <Nav.Link as={Link} to = "/login">Login</Nav.Link>
            <Nav.Link as={Link} to = "/employees">Employee List</Nav.Link>
            <Nav.Link as={Link} to = "/logout">Logout</Nav.Link>
            
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>


        </div>

    )
}