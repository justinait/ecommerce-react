import React, { useContext, useEffect } from 'react';
import { BsCartFill } from "react-icons/bs";
import { Button } from 'react-bootstrap';
import { CartContext } from '../../context/CartProvider';
import Dropdown from 'react-bootstrap/Dropdown';

const CartWidget = () => {
    const { cartProducts, removeItem, clear } = useContext(CartContext)
    
    return (
        <div>
            <Dropdown>
                <Dropdown.Toggle variant="success" id="dropdown-basic">
                    <BsCartFill />
                    <p>{cartProducts.length}</p>
                </Dropdown.Toggle>
                <Dropdown.Menu>
                    <p>Tu carrito</p>

                    {
                    cartProducts.length > 0 ? <Button variant="outline-dark" onClick={ clear }> Vaciar carrito </Button> : ""
                    }
                    
                    {
                    cartProducts.map((e) => (                      
                    
                        <div key={e.id.toString()} >
                            <div>
                                <h1> {e.name} </h1>
                                <img src={e.image} alt={e.name} />
                                <h3> $ {e.retail} </h3>
                            </div>
                            <Button variant="outline-dark" onClick={()=> removeItem(e.id)}> Eliminar </Button>
                        </div>
                    ))
                    }
                </Dropdown.Menu>
            </Dropdown>
        </div>
    );
};

export default CartWidget;