import {useState, React, useContext} from 'react';
import Button from 'react-bootstrap/Button';
import { CartContext } from '../../context/CartProvider';
import './ItemCount.css'

const ItemCount = ({stock, setAmount, productToAdd}) => {

    const { addItem } = useContext(CartContext)

    const [count, setCount] = useState(1);
    
    function onAdd () {
        if ( stock > count ){
            return setCount ( count + 1 );
        }
    }
    
    function onRemove () {
        if( count > 0)   setCount ( count - 1 )
    }

    const addToCart = () => {
        setAmount(count);
        addItem( productToAdd );
    }
    return (
        <div>
            <div className='ItemCountContainer'>
                <button onClick={ onAdd }> + </button>
                <p> { count } </p>
                <button onClick={ onRemove }> - </button>
            </div>
            
            <Button variant="outline-dark" onClick={addToCart}> Agregar al carrito </Button>

        </div>
    );
};

export default ItemCount;