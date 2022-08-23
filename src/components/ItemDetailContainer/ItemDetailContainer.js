import { useEffect, useState } from "react"
import ItemDetail from "../ItemDetail/ItemDetail"
import { useParams } from "react-router-dom"
import { doc, getDoc } from 'firebase/firestore'
import db from "../../firebaseConfig"

const ItemDetailContainer = () => {
    
    const [productData, setProductData] = useState({});
    
    const { id } = useParams();

    useEffect( () => {
        getProduct();
    }, [id])

    const getProduct = async () => {
        const docRef = doc(db, 'products', id);
        const docSnapshot = await getDoc(docRef);
        
        let product = docSnapshot.data();
        product.id = docSnapshot.id;

        setProductData(product)

        return product;
    }

    return(
        <div>
            <ItemDetail data={productData}/>
        </div>
    )
}

export default ItemDetailContainer;