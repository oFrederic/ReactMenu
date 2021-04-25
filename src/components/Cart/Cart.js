import React from 'react';

import classes from './Cart.module.css';

const Cart = () => {
  const cartItems = [
    { id: 'c1', name: 'sushi', amount: 3, price: 1299 },
  ].map(item => <li>{item.name}</li>);

  return (
    <div>
      <ul className={classes['cart-items']}>{cartItems}</ul>
      <div>
        <span className={classes.total}>Total Amount</span>
        <span>3897</span>
      </div>
      <div className={classes.action}>
        <button className={classes['button--alt']}>Close</button>
        <button>Order</button>
      </div>
    </div>
  );
};

export default Cart;
