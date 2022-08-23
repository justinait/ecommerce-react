import React from 'react';
import { Link } from 'react-router-dom';
import ItemCount from '../ItemCount/ItemCount'
import './Item.css'

const Item = ({data}) => {

    const {name, cost, wholesale, retail, image} = data;

    return (
        <div className='productContainer'>
            
            <Link to={`/item/${data.id}`}  style = {{textDecoration: "none", color: 'black'}}>
                <p>{name} - ${retail}</p>
                <img src={image} alt={name} className='productImg' />
            </Link>

        </div>
        
    );
};

export default Item;