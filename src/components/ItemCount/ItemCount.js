import {useState, React, useContext } from 'react';
import './ItemCount.css'
import { CartContext } from '../../context/CartProvider';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';

const ItemCount = ({ productToAdd }) => {
    
    const [count, setCount] = useState(1);
    const [amount, setAmount] = useState(0); 

    const { addItem } = useContext(CartContext)

    const addToCart = () => {
        setAmount( count );
        addItem( productToAdd, amount );
    }

    function onAdd () {
        if ( productToAdd.stock > count ){
            return setCount(count+1);
        } else {
            <p>No hay mas stock!</p>
        }
    }
    
    function onRemove () {
        if( count > 0)   setCount ( count - 1 )
    }

    const optionsAfterAddingProduct = <>
        <Link to='/cart'> <Button variant="outline-dark"> Terminar compra </Button> </Link>
        <Link to='/category'> <Button variant="outline-dark"> Continuar comprando </Button> </Link>
        {console.log(amount)}
    </>

    return (
        <div>
            <div className='ItemCountContainer'>
                <button onClick={ onAdd }> + </button>
                <p> { count } </p>
                <button onClick={ onRemove }> - </button>
            </div>
            
            {
                ( amount > 0) ? optionsAfterAddingProduct : <Button variant="outline-dark" onClick={addToCart}> Agregar al carrito </Button>
            }
        </div>
    );
};

export default ItemCount;