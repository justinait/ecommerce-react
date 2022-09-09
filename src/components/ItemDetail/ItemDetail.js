import { useState } from "react";
import ItemCount from "../ItemCount/ItemCount"
import './ItemDetail.css'

const ItemDetail = ({data}) => {
    
    //const brand = 'Valle Gran';
    const productTitle = 'Aceite de Oliva Extra Virgen';
    
    const [amount, setAmount] = useState(0); 
    
    return(
        
        <div className='productDetailContainer'>
            
            <div className='imgContainer'>
                <img src={data.image} alt={data.name} width="200"/>
            </div>

            <div className="infoAndCount">
                <div className='infoContainer'>
                    <div className = 'mainInfo'>
                        <h1> {data.name} </h1>
                        {/* <h2> {brand} </h2> */}
                        <h2> {productTitle} </h2>
                        <p className='price'>$ {data.retail} </p>

                    </div>
                    
                    <h6> {data.description} </h6>

                </div>

                < ItemCount productToAdd={data} setAmount={setAmount}/>
 
            </div>

        </div>
    )
}

export default ItemDetail