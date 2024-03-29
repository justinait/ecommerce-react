import React, { useEffect, useState } from 'react';
import ItemList from '../ItemList/ItemList'
import { useParams } from 'react-router-dom';
import { getDocs, collection } from 'firebase/firestore'
import db from '../../firebaseConfig';

const ItemListContainer = () => {

    const [listProducts, setListProducts] = useState([])
    const { category } = useParams();

    const getProducts = async () => {
        const productCollection = collection(db, 'products')
        const productSnapshot = await getDocs(productCollection)

        const productList = productSnapshot.docs.map( (e) => {
            let product = e.data();
            product.id = e.id;

            return product;
        } )

        if(category){

            let categoryList = productList.filter( (e) => {
                return e.category == category
            })
            
            return categoryList
        } 
        else {
            return productList;
        }

    }

    useEffect(() => {
        
        getProducts()
            .then( (res) => { 
                setListProducts(res)
            })
            
    }, [category])


    return(
        <div>
            <ItemList dataProducts={listProducts}/>
        </div>
    )
}
export default ItemListContainer;