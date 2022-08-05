import React from 'react';
import { NavDropdown } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import CartWidget from './CartWidget';

function NavBar() {
  return (
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="/">Aceite de Oliva</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="/category">Productos</Nav.Link>
              <Nav.Link href="#about">Sobre nosotros</Nav.Link>
              <Nav.Link href="#contact">Contacto</Nav.Link>
              <NavDropdown title="Categoria" id="basic-nav-dropdown">
                <NavDropdown.Item href="/category/pet">Plastico</NavDropdown.Item>
                <NavDropdown.Item href="/category/vidrio">Vidrio</NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
        <CartWidget />
      </Navbar>
    
  );
}

export default NavBar;