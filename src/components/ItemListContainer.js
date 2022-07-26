import React from 'react';
import ItemCount from './ItemCount/ItemCount'

const ItemListContainer = ({greeting}) => {
    return (
        <div>
            {greeting}
            < ItemCount stock="10" />
        </div>
    );
};

export default ItemListContainer;