import React, { useState } from 'react';
import { createContext } from 'react';

const CartContext = createContext();

const CartProvider = ({ children }) => {

    const [cartProducts, setCartProducts] = useState([]);

    const addItem = (productToAdd) => {
        
        setCartProducts( [...cartProducts, productToAdd])
        
    }

    const deleteItem = (id) => {
        const newCart = cartProducts.filter((e) => {
            return e.id != id;
        })
        setCartProducts(newCart);
    }
    const clear = () => {   setCartProducts([])    }

    const isInCart = (id) => {
        cartProducts.map((e) => e.id == id)
    }

    return (
        <div>
            <CartContext.Provider value={ {addItem, deleteItem, clear, isInCart} } >
                { children }
            </CartContext.Provider>
        </div>
    );
};

export default CartProvider;

export { CartContext };