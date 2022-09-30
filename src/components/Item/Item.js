import React from 'react';
import { Link } from 'react-router-dom';
import './Item.css'

const Item = ({data}) => {

    const {name, retail, image, category} = data;

    return (
        <div className='productContainer'>
            
            <Link to={`/item/${data.id}`}  style = {{textDecoration: "none", color: 'black'}}>
                <img src={image} alt={name} className='productImg' />

                {
                    category == 'aceite' ? <h3>Aceite de Oliva</h3> : <h3>Aceitunas</h3>
                }
                
                <h3>{name}</h3>
                <h2>${retail}</h2>
                
            </Link>

        </div>
        
    );
};

export default Item;