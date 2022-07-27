import React from 'react';
import ItemCount from '../ItemCount/ItemCount'

const Item = ({data}) => {

    const {name, cost, wholesale, retail, image} = data;


    return (
        <div>
            <p>{name} - ${retail}</p>
            < ItemCount stock="10" />
        </div>
    );
};

export default Item;