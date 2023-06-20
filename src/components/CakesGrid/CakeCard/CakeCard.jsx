import { Fragment } from 'react';
import { Button, Card } from 'react-bootstrap';
import './CakeCard.css';

export const CakeCard = ({ cake, addToCart }) => {
  return (
    <Fragment>
      <Card className="CakeCard bg-dark text-white">
        <Card.Img className='CakeCardImg' src={cake.image} alt="Card image" />
        <Card.ImgOverlay>
          <Card.Title>{cake.name}</Card.Title>
          <Card.Text>{cake.description}</Card.Text>
          <Card.Text>
            <Button
              className='Button'
              onClick={() => {addToCart(cake)}}
            >Agregar</Button>
          </Card.Text>
        </Card.ImgOverlay>
      </Card>
    </Fragment>
  );
}
