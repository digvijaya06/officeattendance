import React from 'react';
import { Navbar, Nav, Button, Container } from 'react-bootstrap';
import { useUser } from '../context/UserContext';

const CustomNavbar = () => {
  const { user } = useUser();

  return (
    <Navbar bg="dark" variant="dark" expand="lg" sticky="top" className="shadow-sm mb-4 position-relative">
      <Container>
       
        <Navbar.Brand
          href="/"
          style={{
            
            textAlign:'center',
            left: '50%',
            transform: 'translateX(-50%)',
            fontWeight: 'bold',
            color: 'white',
            textDecoration: 'none',
          }}
        >
          Office Attendance
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/dashboard">Dashboard</Nav.Link>
            <Nav.Link href="/attendance">Attendance</Nav.Link>
          </Nav>
          {user ? (
            <Button variant="outline-light" href="/logout">
              Logout
            </Button>
          ) : (
            <Button variant="outline-light" href="/login">
              Login
            </Button>
          )}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default CustomNavbar;
