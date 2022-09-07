import React, { useContext } from 'react';
import { BsCartFill } from "react-icons/bs";
import { Button } from 'react-bootstrap';
import { CartContext } from '../../context/CartProvider';
import Dropdown from 'react-bootstrap/Dropdown';
import '../Cart/Cart.css'

const CartWidget = () => {
    const { cartProducts, removeItem, clear } = useContext(CartContext)
    
    return (
        <div>
            <Dropdown>
                <Dropdown.Toggle variant="success" id="dropdown-basic"  className='cartIcon'>
                    <BsCartFill/>
                    <p>{cartProducts.length}</p>
                </Dropdown.Toggle>
                <Dropdown.Menu className='widgetContainer'>
                    <p>TU CARRITO</p>
                    
                    {
                    cartProducts.map((e) => (                      
                    
                        <div key={e.id.toString()} >
                            <div className='widgetItemContainer'>
                                <img className='widgetImage' src={e.image} alt={e.name} />
                                <div className='mainDetails'>
                                    <h2> {e.name} </h2>
                                    <h3> $ {e.retail} </h3>
                                    <Button variant="outline-dark" onClick={()=> removeItem(e.id)}> Eliminar </Button>
                                </div>
                                
                            </div>
                            
                        </div>
                    ))
                    }
                </Dropdown.Menu>
            </Dropdown>
        </div>
    );
};

export default CartWidget;