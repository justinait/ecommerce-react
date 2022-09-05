import React from 'react';
import { Link } from 'react-router-dom';
import ItemCount from '../ItemCount/ItemCount'
import './Item.css'

const Item = ({data}) => {

    const {name, cost, wholesale, retail, image} = data;

    return (
        <div className='productContainer'>
            
            <Link to={`/item/${data.id}`}  style = {{textDecoration: "none", color: 'black'}}>
                <img src={image} alt={name} className='productImg' />
                <h4>{name}</h4>
                <h5>${retail}</h5>
            </Link>

        </div>
        
    );
};

export default Item;