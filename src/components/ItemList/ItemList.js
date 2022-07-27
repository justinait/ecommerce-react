import React from 'react';
import Item from '../Item/Item'

const ItemList = ({dataProducts}) => {

    return (
        <div>
            {dataProducts.map((e) => {
                return(
                    <Item key={e.id} data={e}/>
                )
            })}
            
        </div>
    );
};

export default ItemList;