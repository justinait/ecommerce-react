import {useState, React} from 'react';
import './ItemCount.css'

const ItemCount = ({stock}) => {
    
    const [count, setCount] = useState(1);
    
    function onAdd () {
        if ( stock > count ){
            return setCount ( count + 1 );
        }
    }
    
    function onRemove () {
        if( count > 0)   setCount ( count - 1 )
    }

    return (
        <div className='ItemCountContainer'>

            <button onClick={ onAdd }> + </button>
            <p> { count } </p>
            <button onClick={ onRemove }> - </button>
        </div>
    );
};

export default ItemCount;