import {useState, React} from 'react';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import './ItemCount.css'

const ItemCount = ({stock}) => {
    
    const [count, setCount] = useState(1);
    const [amount, setAmount] = useState(0);
    
    function onAdd () {
        if ( stock > count ){
            return setCount ( count + 1 );
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

            {
                ( amount > 0) ? <Link to='/cart'> <Button variant="outline-dark">Terminar compra</Button> </Link> : 
                <Button variant="outline-dark" onClick={()=> setAmount(count)}> Agregar al carrito </Button>
            }
            

        </div>
    );
};

export default ItemCount;