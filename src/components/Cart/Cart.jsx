import './Cart.css';
import { Fragment, useState } from 'react';
import { Modal, Button } from 'react-bootstrap';
import Icon from '@mdi/react';
import { mdiCartOutline } from '@mdi/js';
import { CartItem } from './CartItem/CartItem';

export const Cart = ({cart, deleteFromCart, addToCart, clearCart}) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <Fragment>
      <Button 
        className='Button'
        variant="primary" 
        onClick={handleShow}
      >
        <Icon path={mdiCartOutline} size={1} /> {cart.length}
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Cart: {cart.length}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {cart.map((cake) => <CartItem
            cake={cake}
            deleteFromCart={deleteFromCart}
            addToCart={addToCart}
          />)}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="danger" onClick={clearCart}>
            Clear
          </Button>
          <Button variant="primary" onClick={clearCart}>
            Buy
          </Button>
        </Modal.Footer>
      </Modal>
    </Fragment>
  );
}
