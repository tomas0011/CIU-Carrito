import { Table, Button } from 'react-bootstrap';
import './CartItem.css';

export const CartItem = ({cake, deleteFromCart, addToCart}) => {
  return (
    <Table striped bordered hover>
      <tbody className='CartItem'>
        <tr>
          <td>{cake.name}</td>
          <td>{
        <Button 
          variant="danger"
          disabled={cake.quantity === 1}
          onClick={() => {deleteFromCart(cake)}}
        >-</Button>} {
          cake.quantity
        } <Button 
          variant="success"
          onClick={() => {addToCart(cake)}}
        >+</Button> {
        <Button 
          variant="danger"
          disabled={cake.quantity > 1}
          onClick={() => {deleteFromCart(cake)}}
        >Tacho</Button>}</td>
        </tr>
      </tbody>
    </Table>
  );
}
