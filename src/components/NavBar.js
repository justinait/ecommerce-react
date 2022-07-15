import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function NavBar() {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="#home">Jorgelina Parkinson</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Inicio</Nav.Link>
            <Nav.Link href="#link">Biografía</Nav.Link>
            <NavDropdown title="Cuadros" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Paisajes</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Figura humana</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Naturaleza muerta</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;