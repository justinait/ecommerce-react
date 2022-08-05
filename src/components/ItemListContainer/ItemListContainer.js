import React, { useEffect, useState } from 'react';
import ItemList from '../ItemList/ItemList'
import products from '../../utils/products.mock.js'
import { useParams } from 'react-router-dom';

const ItemListContainer = ({section}) => {

    const [listProducts, setListProducts] = useState([])
    const {category} = useParams();

    let categoryList = products.filter( e => {
        console.log(e.category, category);
        return e.category == category
    })


    const getProducts = new Promise( (resolve, reject) => {
        setTimeout( () => {
            if(category){
                resolve(categoryList)
            }
            else{
                resolve(products)
            }
        }, 2000)
    })

    useEffect(() => {
        getProducts
            .then( (res) => { 
                setListProducts(res)
            })
            .catch( (err) => {
                console.error(err);
            })
    }, [])


    return(
        <div className='ItemListContainer'>
            <h3>{section}</h3>
            <ItemList dataProducts={listProducts}/>
        </div>
    )
}
export default ItemListContainer;