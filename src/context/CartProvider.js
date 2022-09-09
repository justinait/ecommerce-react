import React, { useState } from 'react';
import { createContext } from 'react';

const CartContext = createContext();

const CartProvider = ({ children }) => {

    const [cartProducts, setCartProducts] = useState([]);
    const [totalPrice, setTotalPrice] = useState(0)
    const [totalProducts, setTotalProducts] = useState(0)


    const addItem = (productToAdd, amount) => {

        productToAdd.amount = amount;
        
        setTotalPrice(totalPrice + productToAdd.retail);
        
        let isInCart = cartProducts.find(e => e.id === productToAdd.id)

        if(!isInCart) {

            setTotalProducts(totalProducts + amount)
            setTotalPrice(totalPrice + productToAdd.retail*amount);

            return setCartProducts(cartProducts => [...cartProducts, productToAdd])
        }
        
    }

    const removeItem = (id) => {
        const newCart = cartProducts.filter((e) => {
            setTotalPrice(totalPrice - e.retail*e.amount)
            return e.id != id;
        })
        setCartProducts(newCart);
    }

    const clear = () => {   
        setCartProducts([]);
        setTotalPrice(0);
        setTotalProducts(0);
    }

    const isInCart = (id) => {
        cartProducts.some((e) => e.id == id)
    }

    return (
        <div>
            <CartContext.Provider value={ { addItem, removeItem, clear, isInCart, cartProducts, totalPrice, totalProducts } } >
                { children }
            </CartContext.Provider>
        </div>
    );
};

export default CartProvider;

export { CartContext };