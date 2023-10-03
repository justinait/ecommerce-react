import { useState } from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import ItemCount from "../ItemCount/ItemCount"
import './ItemDetail.css'

const ItemDetail = ({data}) => {
    
    //const brand = 'Valle Gran';
    const productTitle = 'Aceite de Oliva Extra Virgen';
    const [amount, setAmount] = useState(0); 

    const optionsAfterAddingProduct = <>
        <Link to='/cart'> <Button variant="outline-dark"> Terminar compra </Button> </Link>
        <Link to='/category'> <Button variant="outline-dark"> Continuar comprando </Button> </Link>
    </>

    return(
        
        <div className='productDetailContainer'>
            
            <div className='imgContainer'>
                <img src={data.image} alt={data.name} />
            </div>

            <div className="infoAndCount">
                <div className='infoContainer'>
                    <div className = 'mainInfo'>
                        <h3 className="detailInfoName"> {data.name} </h3>
                        {
                            data.category == 'aceite' ? <h3>Aceite de Oliva</h3> : <h3>Aceitunas</h3>
                        }
                        
                        <p className='price'>$ {data.retail} </p>

                    </div>
                    
                    <h6 className="detailDescription"> {data.description} </h6>

                </div>

                {
                    !amount ? < ItemCount productToAdd={data} setAmount={setAmount}/> : optionsAfterAddingProduct
                }
 
            </div>

        </div>
    )
}

export default ItemDetail