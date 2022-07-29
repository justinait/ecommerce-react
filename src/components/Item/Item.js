import React from 'react';
import ItemCount from '../ItemCount/ItemCount'
import './Item.css'

const Item = ({data}) => {

    const {name, cost, wholesale, retail, image} = data;


    return (
        <div className='productContainer'>
            <p>{name} - ${retail}</p>
            <img src={image} alt={name} className='productImg' />
            < ItemCount stock="10" />
        </div>
    );
};

export default Item;