import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { CartContext } from '../../context/CartProvider';
import CartWidget from './CartWidget';
import './NavBar.css'

function NavBar() {

  const { totalProducts } = useContext(CartContext);

  return (
    <div className="navbar">
      <NavLink style = {{textDecoration: "none", color: 'black'}} to='/'><h1>oliva litoral</h1></NavLink>

      <div className='rightNavbar'>

        <NavLink className='navbarOptions' to='/category'>Productos</NavLink>
        <NavLink className='navbarOptions' to='/category/aceitunas'>Aceitunas</NavLink>
        <NavLink className='navbarOptions' to='/category/aceite'>Aceite de Oliva</NavLink>  
        <NavLink className='navbarOptions' to='/about'>Nosotros</NavLink>
        <NavLink className='navbarOptions' to='/contact'>Contacto</NavLink>

        {          
          totalProducts ? <CartWidget/> : ''
        }

      </div>
    </div>
    
  );
}

export default NavBar;