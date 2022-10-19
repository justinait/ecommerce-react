import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <Navbar bg="light" expand="lg">
      <Container fluid>
        <Navbar.Brand href="#"><Link style = {{textDecoration: "none", color: 'black'}} to='/'><h1>oliva litoral</h1></Link></Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav            className="me-auto my-2 my-lg-0"            style={{ maxHeight: '100px' }}            navbarScroll          >

            <Nav.Link><Link style = {{textDecoration: "none", color: 'black', fontSize: "17px"}} to='/category'>Productos</Link></Nav.Link>

            <NavDropdown title="Categorias" id="navbarScrollingDropdown">
              <NavDropdown.Item><Nav.Link><Link style = {{textDecoration: "none", color: 'black', fontSize: "17px"}} to='/category/aceitunas'>Aceitunas</Link></Nav.Link></NavDropdown.Item>
              <NavDropdown.Item><Link style = {{textDecoration: "none", color: 'black', fontSize: "17px"}} to='/category/aceite'>Aceite de Oliva</Link></NavDropdown.Item>
            </NavDropdown>

            <Nav.Link><Link style = {{textDecoration: "none", color: 'black', fontSize: "17px"}} to='/about'>Nosotros</Link></Nav.Link>
            
            <Nav.Link><Link style = {{textDecoration: "none", color: 'black', fontSize: "17px"}} to='/contact'>Contacto</Link></Nav.Link>
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;