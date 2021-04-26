import React, { useState } from 'react';

import CartProvider from './store/CartProvider';
import Cart from './components/Cart/Cart';
import Header from './components/Layout/Header';
import Meals from './components/Meals/Meals';

function App() {
  const [modalIsShowed, setModalIsShowed] = useState(false);

  const toggleModal = () => {
    setModalIsShowed(!modalIsShowed);
  };

  return (
    <CartProvider>
      {modalIsShowed && <Cart onToggleModal={toggleModal} />}
      <Header onToggleModal={toggleModal} />
      <main>
        <Meals />
      </main>
    </CartProvider>
  );
}

export default App;
