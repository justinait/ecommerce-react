import ItemCount from "../ItemCount/ItemCount"
import './ItemDetail.css'

const ItemDetail = ({data}) => {
    const brand = 'Valle Gran';

    return(
        <div className='productDetailContainer'>
            <div className='imgContainer'>
                <img src={data.image} alt='{data.name}' width="200"/>
            </div>

            <div className='infoContainer'>
                <h1>{data.name}</h1>
                <h2>{brand}</h2>
                <h2>{data.productTitle}</h2>
                <p className='price'>$ {data.retail}</p>

                <h6> Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
                    Autem minus doloribus animi temporibus ipsam repellat voluptatem dolorem. 
                    Deleniti ullam alias exercitationem, cumque adipisci, aspernatur odio mollitia tenetur, 
                    aut laboriosam rerum.
                </h6>

                < ItemCount stock='10' />
            </div>

        </div>
    )
}

export default ItemDetail