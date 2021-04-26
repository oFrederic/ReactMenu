import React, { Fragment, useState } from 'react';

import Header from './components/Layout/Header';
import Meals from './components/Meals/Meals';
import Cart from './components/Cart/Cart';

function App() {
  const [modalIsShowed, setModalIsShowed] = useState(false);

  const toggleModal = () => {
    setModalIsShowed(!modalIsShowed);
  };

  return (
    <Fragment>
      {modalIsShowed && <Cart onToggleModal={toggleModal} />}
      <Header onToggleModal={toggleModal} />
      <main>
        <Meals />
      </main>
    </Fragment>
  );
}

export default App;
