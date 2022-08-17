import React, { useContext } from 'react';
import { Link } from 'react-router-dom'
import { Button } from 'react-bootstrap';
import { CartContext } from '../../context/CartProvider';

const Cart = () => {
    const { cartProducts, removeItem, clear, totalPrice } = useContext(CartContext)

    return (
        <div>
            <p>Tu carrito</p>
            {   console.log({cartProducts}) }
            {
                cartProducts.length > 0 ? 
                <Button variant="outline-dark" onClick={ clear }> Vaciar carrito </Button> : 
                <Link to='/category' style = {{textDecoration: "none", color: 'black'}}> Ver los productos </Link>
            }
            
            {
                cartProducts.map((e) => {
                    return (
                        <div key={e.id} >
                            <div>
                                <h1> {e.name} </h1>
                                <img src={e.image} alt={e.name} width="200"/>
                                <h3> $ {e.retail} </h3>
                            </div>
                            <Button variant="outline-dark" onClick={()=> removeItem(e.id)}> Eliminar </Button>
                        </div>
                    )
                })
            }
            <p>{totalPrice}</p>
        </div>
    );
};

export default Cart;