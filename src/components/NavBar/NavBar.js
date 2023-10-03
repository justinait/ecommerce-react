import React, { useContext, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { CartContext } from '../../context/CartProvider';
import CartWidget from './CartWidget';
import './NavBar.css';

function NavBar() {
  const { totalProducts } = useContext(CartContext);
  const [showSubMenu, setShowSubMenu] = useState(false);

  const toggleSubMenu = () => {
    setShowSubMenu(!showSubMenu);
  };

  return (
    <div className="navbar">
      <NavLink style={{ textDecoration: 'none', color: 'black' }} to="/">
        <h1>oliva litoral</h1>
      </NavLink>

      <div className="rightNavbar">
        <div
          className={`navbarOptions ${showSubMenu ? 'active' : ''}`}
          onClick={toggleSubMenu}
        >
          Productos
          {showSubMenu && (
            <div className="submenu">
              <NavLink to="/category/aceitunas">Aceitunas</NavLink>
              <NavLink to="/category/aceite">Aceite de Oliva</NavLink>
            </div>
          )}
        </div>
        <NavLink className="navbarOptions" to="/about">
          Nosotros
        </NavLink>
        <NavLink className="navbarOptions" to="/contact">
          Contacto
        </NavLink>

        {totalProducts ? <CartWidget /> : ''}
      </div>
    </div>
  );
}

export default NavBar;
