import { Fragment } from 'react';
import './Carousel.css';
import { Carousel as ReactCarousel } from 'react-bootstrap';

export const Carousel = ({cakes}) => {
  return (
    <Fragment>
      <ReactCarousel
        className='Carousel'
      >
        {cakes.map((cake) => 
          <ReactCarousel.Item>
            <img
              className="CarouselImg d-block w-100"
              src={cake.image}
              alt={cake.name}
            />
            <ReactCarousel.Caption>
              <h3>{cake.name}</h3>
              <p>{cake.description}</p>
            </ReactCarousel.Caption>
          </ReactCarousel.Item>
        )}
      </ReactCarousel>
    </Fragment>
  );
}
