import React, { useContext } from 'react';
import { Link } from 'react-router-dom'
import { Button } from 'react-bootstrap';
import { CartContext } from '../../context/CartProvider';
import './Cart.css'
import ModalForm from '../ModalForm/ModalForm';
import CartTable from './CartTable';

const Cart = () => {
    const { totalProducts, clear, totalPrice } = useContext(CartContext)
    
    const fullCartOptions = <>
        <div className='ifCartIsNotEmpty'>
            <Button variant="outline-dark" onClick={ clear }> Vaciar carrito </Button>
            <div className='paymentOptions'>
                <h3>Total a pagar: ${totalPrice}</h3>
                <ModalForm />
            </div>
        </div>
    </>

    const ifCartIsFull = <>
        {fullCartOptions}
        <CartTable />
        {fullCartOptions}
    </>

    const ifCartIsEmpty = <>
        <Link to='/category' style = {{textDecoration: "none", color: 'black'}}> Ver los productos </Link>
        <div className="emptyCart">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYiAiefKh9pGuGtLJV82J2iLb0cMJ5V45XL4xr6DllBJeeMn2Q329k0gAS3cZJ_yMit3c&usqp=CAU" alt="Carrito vacio"/>
            <h2>No hay nada en tu carrito!</h2>
            <Link to='/category'> <Button variant="outline-dark"> Explorar </Button> </Link>
        </div>
    </>

    return (
        <div>
            {
                totalProducts ? 
                ifCartIsFull : 
                ifCartIsEmpty
            }
            
        </div>
    );
};

export default Cart;