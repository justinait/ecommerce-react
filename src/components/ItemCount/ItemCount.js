import {useState, React, useContext } from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { CartContext } from '../../context/CartProvider';
import './ItemCount.css'

const ItemCount = ({ productToAdd, setAmount }) => {
    
    const [count, setCount] = useState(1);
    const [added, setAdded] = useState(false);

    const { addItem } = useContext(CartContext)
    
    const addToCart = (count) => {
        setAmount( count );
        addItem(productToAdd, count);
        setAdded(true);
    }
    function onAdd () {
        if ( productToAdd.stock > count ){
            return setCount(count+1);
        }
    }
    
    function onRemove () {
        if( count > 0)   setCount ( count - 1 )
    }
    const optionsAfterAddingProduct = <>
        <Link to='/cart'> <Button variant="outline-dark"> Terminar compra </Button> </Link>
        <Link to='/category'> <Button variant="outline-dark"> Continuar comprando </Button> </Link>
    </>

    return (
        <div>
            <div className='ItemCountContainer'>
                <button onClick={ onAdd }> + </button>
                <p> { count } </p>
                <button onClick={ onRemove }> - </button>
            </div>

            {
                added ? optionsAfterAddingProduct : <Button variant="outline-dark" onClick={() => addToCart(count)}> Agregar al carrito </Button>
            }
            
        </div>
    );
};

export default ItemCount;