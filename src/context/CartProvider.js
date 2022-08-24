import React, { useState } from 'react';
import { createContext } from 'react';

const CartContext = createContext();

const CartProvider = ({ children }) => {

    const [cartProducts, setCartProducts] = useState([]);
    const [totalPrice, setTotalPrice] = useState(0)

    const addItem = (productToAdd) => {
        
        setTotalPrice(totalPrice + productToAdd.retail);

        let isInCart = cartProducts.find(e => e.id === productToAdd.id)

        if(!isInCart) {
            return setCartProducts(cartProducts => [...cartProducts, productToAdd])
        }
        
    }

    const removeItem = (id) => {
        const newCart = cartProducts.filter((e) => {
            setTotalPrice(totalPrice - e.retail)
            return e.id != id;
        })
        setCartProducts(newCart);
        
    }

    const clear = () => {   
        setCartProducts([])    
        setTotalPrice(0)
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