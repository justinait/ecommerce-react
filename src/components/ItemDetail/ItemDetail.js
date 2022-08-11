import { useState } from "react";
import { Link } from "react-router-dom";
import ItemCount from "../ItemCount/ItemCount"
import Button from 'react-bootstrap/Button';
import './ItemDetail.css'

const ItemDetail = ({data}) => {
    const brand = 'Valle Gran';

    const [amount, setAmount] = useState(0);

    return(

        <div className='productDetailContainer'>
            <div className='imgContainer'>
                <img src={data.image} alt='{data.name}' width="200"/>
            </div>

            <div className='infoContainer'>

                <h1> {data.name} </h1>
                <h2> {brand} </h2>
                <h2> {data.productTitle} </h2>
                <p className='price'>$ {data.retail} </p>

                <h6> Lorem, ipsum dolor sit amet consectetur adipisicing elit. Autem minus doloribus animi temporibus ipsam repellat voluptatem dolorem. </h6>

            </div>

            {
                ( amount > 0) ? 
                <Link to='/cart'> <Button variant="outline-dark"> Terminar compra </Button> </Link> : 
                < ItemCount stock='10' setAmount={setAmount} productToAdd={data}/>        
            }
        </div>
    )
}

export default ItemDetail