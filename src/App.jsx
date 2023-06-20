import { Fragment, useState } from 'react';
import './App.css';
import { initialCakes } from './stubs/initialCakes'
import { Navbar } from './components/Navbar/Navbar';
import { Carousel } from './components/Carousel/Carousel';
import { CakesGrid } from './components/CakesGrid/CakesGrid';
import { Footer } from './components/Footer/Footer';

const App = () => {
  const [cakes, setCakes] = useState(initialCakes);
  
  const [cart, setCart] = useState([]);

  const addToCart = (newCartItem) => {
    const cakeFound = cart.find((cake) => cake.id === newCartItem.id);
    if (cakeFound) {
      setCart(cart.map((cartItem) => cartItem.id == newCartItem.id
        ? {...cartItem, quantity: cakeFound.quantity + 1 }
        : cartItem
      ));
    } else {
      setCart([...cart, {...newCartItem, quantity: 1 }]);
    }
  }

  const deleteFromCart = (cartItemToDelete) => {
    const cakeFound = cart.find((cake) => cake.id === cartItemToDelete.id);
    if (cakeFound) {
      if (cakeFound.quantity > 1) {
        setCart(cart.map((cartItem) => cartItem.id == cartItemToDelete.id
          ? {...cartItem, quantity: cakeFound.quantity - 1 }
          : cartItem
        ));
      } else {
        setCart(cart.filter((cartItem) => cartItem.id !== cartItemToDelete.id))
      }
    } else {
      console.log('No se puede eliminar')
    }
  }

  const clearCart = () => {
    setCart([]);
  }

  return (
    <Fragment>
      <Navbar
        cart={cart}
        deleteFromCart={deleteFromCart}
        addToCart={addToCart}
        clearCart={clearCart}
      />
      <Carousel
        cakes={cakes}
        addToCart={addToCart}
      />
      <CakesGrid
        className="my-5"
        cakes={cakes}
        addToCart={addToCart}
      />
      <Footer/>
    </Fragment>
  );
}

export default App;
