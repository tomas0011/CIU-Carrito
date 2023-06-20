import { Fragment } from 'react';
import { Container, Navbar } from 'react-bootstrap';

export const Footer = () => {

  return (
    <Fragment>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">
            <img
              alt=""
              src="https://picsum.photos/50/50"
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{' '}
            React Bootstrap
          </Navbar.Brand>
        </Container>
      </Navbar>
    </Fragment>
  );
}
