import React from 'react';
import { Link } from 'react-router-dom';
import './Item.css'

const Item = ({data}) => {

    const {name, retail, image, category} = data;

    return (
        <div className='productContainer'>
            
            <Link to={`/item/${data.id}`}  style = {{textDecoration: "none", color: 'black'}}>
                <div className='productImg' >
                    <img src={image} alt={name} />
                </div>
                
                <div className='productInfo'>
                    {
                        category == 'aceite' ? <h3>Aceite de Oliva</h3> : <h3>Aceitunas</h3>
                    }
                    <h3 className='productInfoName'>{name}</h3>
                    <h2>${retail}</h2>
                </div>
            </Link>

        </div>
        
    );
};

export default Item;