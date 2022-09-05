import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../../context/CartProvider';
import CartWidget from './CartWidget';
import './NavBar.css'

function NavBar() {

  const { cartProducts } = useContext(CartContext);

  return (
    <div className="navbar">
      <Link style = {{textDecoration: "none", color: 'black'}} to='/'><h1>Aceite de Oliva</h1></Link>

      <div className='rightNavbar'>

        <Link style = {{textDecoration: "none", color: 'black'}} to='/category'>Productos</Link>
        <Link style = {{textDecoration: "none", color: 'black'}} to='/category/pet'>Plastico</Link>
        <Link style = {{textDecoration: "none", color: 'black'}} to='/category/vidrio'>Vidrio</Link>  
        <p>Sobre nosotros</p>
        <p>Contacto</p>

        {          cartProducts.length > 0 && <CartWidget />       }

      </div>
    </div>
    
      // <Navbar bg="light" expand="lg">
      //   <Container>
      //     <Navbar.Brand href="/">Aceite de Oliva</Navbar.Brand>
      //     <Navbar.Toggle aria-controls="basic-navbar-nav" />
      //     <Navbar.Collapse id="basic-navbar-nav">
      //       <Nav className="me-auto">
      //         <Nav.Link href="/category">Productos</Nav.Link>
      //         <Nav.Link href="#about">Sobre nosotros</Nav.Link>
      //         <Nav.Link href="#contact">Contacto</Nav.Link>
      //         <NavDropdown title="Categoria" id="basic-nav-dropdown">
      //           <NavDropdown.Item href="/category/pet">Plastico</NavDropdown.Item>
      //           <NavDropdown.Item href="/category/vidrio">Vidrio</NavDropdown.Item>
      //         </NavDropdown>
      //       </Nav>
      //     </Navbar.Collapse>
      //   </Container>
      //   {          cartProducts.length > 0 && <CartWidget />       }
      // </Navbar>
    
  );
}

export default NavBar;