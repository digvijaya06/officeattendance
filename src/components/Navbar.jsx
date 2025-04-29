import React from 'react';
import { Navbar, Nav, Button } from 'react-bootstrap';
import { useUser } from '../context/UserContext';

const CustomNavbar = () => {
  const { user } = useUser();

  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Navbar.Brand href="/">Office Attendance</Navbar.Brand>
      {user && (
        <Nav className="ml-auto">
          <Nav.Link href="/dashboard">Dashboard</Nav.Link>
          <Nav.Link href="/logout">
            <Button variant="outline-light">Logout</Button>
          </Nav.Link>
        </Nav>
      )}
    </Navbar>
  );
};

export default CustomNavbar;
