import React from 'react';

import Modal from '../UI/Modal';
import classes from './Cart.module.css';

const Cart = () => {
  const cartItems = [
    { id: 'c1', name: 'sushi', amount: 3, price: 2299 },
  ].map(item => <li key={item.id}>{item.name}</li>);

  return (
    <Modal>
      <ul className={classes['cart-items']}>{cartItems}</ul>
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>6887</span>
      </div>
      <div className={classes.actions}>
        <button className={classes['button--alt']}>Close</button>
        <button className={classes.button}>Order</button>
      </div>
    </Modal>
  );
};

export default Cart;
