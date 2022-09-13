import {useState, React, useContext } from 'react';
import { Button } from 'react-bootstrap'
import { CartContext } from '../../context/CartProvider';
import './ItemCount.css'

const ItemCount = ({ productToAdd, setAmount }) => {
    
    const [count, setCount] = useState(1);

    const { addItem } = useContext(CartContext)
    
    const addToCart = (count) => {
        setAmount( count );
        addItem(productToAdd, count);
    }

    function onAdd () {
        if ( productToAdd.stock > count ){
            return setCount(count+1);
        }
    }
    
    function onRemove () {
        if( count > 0)   setCount ( count - 1 )
    }

    return (
        <div>
            <div className='ItemCountContainer'>
                <button onClick={ onAdd }> + </button>
                <p> { count } </p>
                <button onClick={ onRemove }> - </button>
            </div>
            <Button variant="outline-dark" onClick={() => addToCart(count)}> Agregar al carrito </Button>
            
        </div>
    );
};

export default ItemCount;