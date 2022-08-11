import React, { useContext, useEffect } from 'react';
import { Button } from 'react-bootstrap';
import { CartContext } from '../../context/CartProvider';

const Cart = () => {
    const { cartProducts, removeItem } = useContext(CartContext)
    useEffect(() => {

    }, [cartProducts])
    return (
        <div>
            <p>Tu carrito</p>
            {
                cartProducts.map((e) => {
                    return (
                        <div key={e.id} >
                            <div>
                                <h1> {e.name} </h1>
                                <img src={e.image} alt="{e.name}" />
                                <h3> $ {e.retail} </h3>
                            </div>
                            <Button variant="outline-dark" onClick={()=> removeItem(e.id)}> Eliminar </Button>
                        </div>
                    )
                })
            }
        </div>
    );
};

export default Cart;