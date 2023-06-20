import './Navbar.css';
import { Cart } from '../Cart/Cart';
import { Container, Nav, Navbar as ReactNavbar } from 'react-bootstrap';

export const Navbar = ({cart, deleteFromCart, addToCart, clearCart}) => {
  return (
    <div className='Navbar'>
      <ReactNavbar bg="light" variant="light">
        <Container>
          <ReactNavbar.Brand className='Brand' href="#home">Tentaciones de Marcela</ReactNavbar.Brand>
          <Nav className="me-auto">
            <Nav.Link className='Link' href="#home">About Us</Nav.Link>
            <Nav.Link className='Link' href="#features">Contact Me</Nav.Link>
            <Nav.Link className='Link' href="#pricing">Admin</Nav.Link>
          </Nav>
          <Cart
            cart={cart}
            deleteFromCart={deleteFromCart}
            addToCart={addToCart}
            clearCart={clearCart}
          />
        </Container>
      </ReactNavbar>
    </div>
  );
}
