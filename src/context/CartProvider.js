import React, { useState } from 'react';
import { createContext } from 'react';

const CartContext = createContext();

const CartProvider = ({ children }) => {

    const [cartProducts, setCartProducts] = useState([]);
    const [totalPrice, setTotalPrice] = useState(0)
    const [totalProducts, setTotalProducts] = useState(0)
    const [totalAmount, setTotalAmount] = useState(0);

    const addItem = (productToAdd, amount) => {

        let isInCart = cartProducts.find(e => e.id === productToAdd.id)
        
        if(!isInCart) {
            
            // setTotalAmount(amount);
            // productToAdd.amount = totalAmount;
            productToAdd.amount = amount;
            
            setTotalPrice(totalPrice + productToAdd.retail*amount);        
            setTotalProducts(totalProducts + productToAdd.amount)
            
            return setCartProducts(cartProducts => [...cartProducts, productToAdd])

        } else {

            setTotalPrice(totalPrice + productToAdd.retail*amount);        
            setTotalProducts(totalProducts + amount);

            // setTotalAmount(isInCart.amount + amount);
            // productToAdd.amount = totalAmount;
            productToAdd.amount = isInCart.amount + amount;

            let auxCartProducts = cartProducts.filter(e => e.id != productToAdd.id )
            //voy a eliminar del cartproducts al producttoadd.id==e.id y poner el nuevo
            //y dsp fijate pq si es inncecexsario el setTotalAmount lo borrais
            console.log(auxCartProducts);
            return setCartProducts(cartProducts => [...auxCartProducts, productToAdd])
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
            <CartContext.Provider value={ { addItem, isInCart, removeItem, clear, cartProducts, totalPrice, totalProducts, totalAmount } } >
                { children }
            </CartContext.Provider>
        </div>
    );
};

export default CartProvider;

export { CartContext };