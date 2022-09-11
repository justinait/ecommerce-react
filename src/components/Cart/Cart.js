import React, { useContext } from 'react';
import { Link } from 'react-router-dom'
import { Button } from 'react-bootstrap';
import { CartContext } from '../../context/CartProvider';
import './Cart.css'
import ModalForm from '../ModalForm/ModalForm';

const Cart = () => {
    const { cartProducts, totalProducts, removeItem, clear, totalPrice } = useContext(CartContext)
    
    const ifCartIsNotEmpty = <div className='ifCartIsNotEmpty'>
        <Button variant="outline-dark" onClick={ clear }> Vaciar carrito </Button>
        <div className='paymentOptions'>
            <h2>Total a pagar: ${totalPrice}</h2>
            <ModalForm />
        </div>
    </div>

    return (
        <div>

            {
                totalProducts ? 
                ifCartIsNotEmpty : 
                <Link to='/category' style = {{textDecoration: "none", color: 'black'}}> Ver los productos </Link>
            }
            <div>
            {
                cartProducts.map((e) => {
                    return (
                        <div key={e.id} >
                            <div className='cartContainer'>
                                <div className='mainDetails'>
                                    <h1> {e.name} </h1>
                                    <img src={e.image} alt={e.name} width="200"/>
                                </div>
                                <h3> $ {e.retail} </h3>
                                <h3> {e.amount} </h3>
                                <h3> ${e.amount * e.retail} </h3>
                                <Button variant="outline-dark" onClick={()=> removeItem(e.id)}> Eliminar </Button>
                            </div>
                            
                        </div>
                    )
                })
            }
            </div>

            {
                totalPrice > 0 ? ifCartIsNotEmpty : <h2>No hay nada en tu carrito!</h2>
            }
            
            
        </div>
    );
};

export default Cart;