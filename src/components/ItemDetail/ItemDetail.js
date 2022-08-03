import ItemCount from "../ItemCount/ItemCount"

const ItemDetail = ({data}) => {

    return(
        <div>
            <img src={data.image} alt='{data.name}' width="200"/>
            <h2>{data.name}</h2>
            <h4>$ {data.retail}</h4>
        
            < ItemCount stock='10' />

        </div>
    )
}

export default ItemDetail