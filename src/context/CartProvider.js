import React, { useState } from 'react';
import { createContext } from 'react';

let totalPrice = 0;
const CartContext = createContext();

const CartProvider = ({ children }) => {

    const [cartProducts, setCartProducts] = useState([]);

    const addItem = (productToAdd) => {
        
        totalPrice = totalPrice + productToAdd.retail;

        let isInCart = cartProducts.find(e => e.id === productToAdd.id)

        if(!isInCart) {
            return setCartProducts(cartProducts => [...cartProducts, productToAdd])
        }
        
    }

    const removeItem = (id) => {
        const newCart = cartProducts.filter((e) => {
            totalPrice = totalPrice - e.retail;
            return e.id != id;
        })
        setCartProducts(newCart);
        
    }

    const clear = () => {   
        setCartProducts([])    
        totalPrice = 0;
    }

    const isInCart = (id) => {
        cartProducts.some((e) => e.id == id)
    }

    return (
        <div>
            <CartContext.Provider value={ { addItem, removeItem, clear, isInCart, cartProducts, totalPrice } } >
                { children }
            </CartContext.Provider>
        </div>
    );
};

export default CartProvider;

export { CartContext };