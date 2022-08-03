import { useEffect, useState } from "react"
import ItemDetail from "../ItemDetail/ItemDetail"
import products from "../../utils/products.mock"

const ItemDetailContainer = () => {
    const [productData, setProductData] = useState({})
    const id = 1;
    useEffect( () => {
        filterById()
    }, [id])

    const filterById = () => {
        products.some( (e) => {
            if(e.id == id) {
                setProductData(e) 
            }
        }
    )
    }
    return(
        <div className="container-item-detail">
            <ItemDetail data={productData}/>
        </div>
    )
}

export default ItemDetailContainer;