import { useContext } from 'react';
import { Button } from 'react-bootstrap';
import Table from 'react-bootstrap/Table';
import { CartContext } from '../../context/CartProvider';

function CartTable() {
    let header = [
        '#',
        'Producto',
        'Precio',
        'Cantidad',
        'Subtotal',
        '   '
    ]
    const { cartProducts, removeItem} = useContext(CartContext)
  return (
    <Table responsive>
      <thead>
        <tr>
          {
          header.map((e, i) => (
            <th key={i}>{e}</th>
          ))
          }
        </tr>
      </thead>
    <tbody>
        {
        cartProducts.map((e, i) => {
            return (
                <tr key={e.id}>
                    <td> {i+1} </td>
                    <td> 
                      {
                        e.category == 'aceite' ? 'Aceite de Oliva ' : 'Aceitunas '
                      }
                      {e.name} 
                      <img src={e.image} alt={e.name} width="150"/>
                    </td>
                    <td> $ {e.retail} </td>
                    <td> {e.amount} </td>
                    <td> {e.amount * e.retail} </td>
                    <td> <Button variant="outline-dark" onClick={()=> removeItem(e.id)}> Eliminar </Button> </td>
                </tr>
            )
        })
        }
      </tbody>
    </Table>
  );
}

export default CartTable;