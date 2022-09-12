import { addDoc, collection } from 'firebase/firestore';
import React, { useState } from 'react';
import { useContext } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import { CartContext } from '../../context/CartProvider';
import db from '../../firebaseConfig';

const ModalForm = () => {

  const { cartProducts, totalPrice, clear } = useContext(CartContext)

  const [show, setShow] = useState(false);

  const [formData, setFormData] = useState([])

  const [order, setOrder] = useState({
    buyer: {formData},
    items: cartProducts.map((e) => ({
			id: e.id,
			name: e.name,
			retail: e.retail,
			amount: e.amount,
		})),
    date: new Date().toLocaleString(),
    total: totalPrice
    })

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleChange = (e) => {
    setFormData({...formData, [e.target.name] : e.target.value})
  }

  const handleOrder = (e) => {
    e.preventDefault();
    pushData({...order, buyer: formData});
    clear();
    handleClose();
  }

  const pushData = async (newOrder) => {
    const orderCollection = collection(db, 'orders');
    const orderDoc = await addDoc(orderCollection, newOrder);
  }

  return (
    <>
      {
        totalPrice > 0 && <Button variant="primary" onClick={handleShow}>Pagar</Button>
      }
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Completa tus datos</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                name="email"
                value={formData.email}
                placeholder="juan@ejemplo.com"
                onChange={handleChange}
                autoFocus
              />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Nombre</Form.Label>
              <Form.Control 
                as="textarea"
                rows={1}
                type="text"
                name="name"
                value={formData.name}
                placeholder="Juan Perez"
                onChange={handleChange}
                />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Telefono</Form.Label>
              <Form.Control 
                as="textarea"
                rows={1}
                type="number"
                name="phone"
                value={formData.phone}
                placeholder="123456789"
                onChange={handleChange}
                />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancelar
          </Button>
          <Button variant="primary" onClick={handleOrder} type='submit'>
            Guardar
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ModalForm;