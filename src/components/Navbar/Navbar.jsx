import './Navbar.css';
import { Cart } from '../Cart/Cart';
import { Container, Nav, Navbar as ReactNavbar } from 'react-bootstrap';

export const Navbar = ({cart, deleteFromCart, addToCart, clearCart}) => {
  return (
    <div className='Navbar'>
      <ReactNavbar expand="lg" className="Navbar-nav bg-body-tertiary">
        <Container>
          <ReactNavbar.Brand className='Brand' href="#home">Tentaciones de Marcela</ReactNavbar.Brand>
          <ReactNavbar.Toggle aria-controls="basic-navbar-nav" />
          <ReactNavbar.Collapse id="basic-navbar-nav">
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
          </ReactNavbar.Collapse>
        </Container>
      </ReactNavbar>
    </div>
  );
}
