import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../../context/CartProvider';
import CartWidget from './CartWidget';
import './NavBar.css'

function NavBar() {

  const { totalProducts } = useContext(CartContext);

  return (
    <div className="navbar">
      <Link style = {{textDecoration: "none", color: 'black'}} to='/'><h1>oliva litoral</h1></Link>

      <div className='rightNavbar'>

        <Link style = {{textDecoration: "none", color: 'white', fontWeight: 'bold'}} to='/category'>Productos</Link>
        <Link style = {{textDecoration: "none", color: 'white', fontWeight: 'bold'}} to='/category/aceitunas'>Aceitunas</Link>
        <Link style = {{textDecoration: "none", color: 'white', fontWeight: 'bold'}} to='/category/aceite'>Aceite de Oliva</Link>  
        <Link style = {{textDecoration: "none", color: 'white', fontWeight: 'bold'}} to='/about'>Nosotros</Link>
        <Link style = {{textDecoration: "none", color: 'white', fontWeight: 'bold'}} to='/contact'>Contacto</Link>

        {          
          totalProducts ? <CartWidget/> : ''
        }

      </div>
    </div>
    
  );
}

export default NavBar;