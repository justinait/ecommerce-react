import React, { useContext } from 'react';
import { Link } from 'react-router-dom'
import { Button } from 'react-bootstrap';
import { CartContext } from '../../context/CartProvider';
import './Cart.css'
import ModalDemo from '../Modal/Modal';

const Cart = () => {
    const { cartProducts, removeItem, clear, totalPrice } = useContext(CartContext)

    return (
        <div>

            <ModalDemo />
            
            {
                cartProducts.length > 0 ? 
                <Button variant="outline-dark" onClick={ clear }> Vaciar carrito </Button> : 
                <Link to='/category' style = {{textDecoration: "none", color: 'black'}}> Ver los productos </Link>
            }
            <div>
            {
                cartProducts.map((e) => {
                    return (
                        <div key={e.id.toString()} >
                            <div className='cartContainer'>
                                <div className='mainDetails'>
                                    <h1> {e.name} </h1>
                                    <img src={e.image} alt={e.name} width="200"/>
                                </div>
                                <h3> $ {e.retail} </h3>
                                <h3> {e.amount} </h3>
                                <Button variant="outline-dark" onClick={()=> removeItem(e.id)}> Eliminar </Button>
                            </div>
                            
                        </div>
                    )
                })
            }
            </div>

            <h2>TOTAL DE LA COMPRA: ${totalPrice}</h2>
            
        </div>
    );
};

export default Cart;