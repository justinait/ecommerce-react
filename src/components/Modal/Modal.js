import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';

const ModalDemo = () => {
  const [show, setShow] = useState(false);
  const [formData, setFormData] = useState([{
    name: '',
    email: '',
    phone: 0
    }])

  const [order, setOrder] = useState([{
    buyer: {},
    items: [],
    total: 0
    }])

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleChange = (e) => {
    setFormData({...formData, [e.target.name] : e.target.value})

  }

  const handleOrder = () => {
    handleClose();
   // setOrder(buyer( formData))  // como se hace para un state array jej
    console.log(order);
  }

  return (
    <>
        <Button variant="primary" onClick={handleShow}>
            PAGAR
        </Button>
            
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
                //as="textarea"
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
                //as="textarea"
                rows={1}
                type="number"
                name="phone"
                value={formData.phone}
                placeholder="123456789"
                onChange={handleChange}
                //onchange, setea el coso y aca value t muestra el coso seteado
                />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancelar
          </Button>
          <Button variant="primary" onClick={handleOrder}>
            Guardar
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ModalDemo;