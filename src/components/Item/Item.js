import React from 'react';
import ItemCount from '../ItemCount/ItemCount'

const Item = ({title}) => {
    return (
        <div>
            <h2>{title}</h2>
            < ItemCount stock="10" />
        </div>
    );
};

export default Item;