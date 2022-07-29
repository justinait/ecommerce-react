import React from 'react';
import Item from '../Item/Item'
import './ItemList.css'

const ItemList = ({dataProducts}) => {

    return (
        <div className='productList'>
            {dataProducts.map((e) => {
                return(
                    <Item key={e.id} data={e}/>
                )
            })}            
        </div>
    );
};

export default ItemList;