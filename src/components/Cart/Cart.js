import React, { useContext } from 'react';

import CartContext from '../../store/cart-context';
import Modal from '../UI/Modal';
import classes from './Cart.module.css';
import CartItem from './CartItem';

const Cart = ({ onToggleModal }) => {
  const cartContext = useContext(CartContext);

  const addItemHandler = item => {};
  const removeItemHandler = id => {};

  const cartItems = cartContext.items.map(item => (
    <CartItem
      key={item.id}
      name={item.name}
      amount={item.amount}
      price={item.price}
      onAddItem={() => addItemHandler(item.id)}
      onRemoveItem={() => removeItemHandler(item.id)}
    />
  ));

  return (
    <Modal onToggleModal={onToggleModal}>
      <ul className={classes['cart-items']}>{cartItems}</ul>
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>{`¥${cartContext.totalAmount}`}</span>
      </div>
      <div className={classes.actions}>
        <button className={classes['button--alt']} onClick={onToggleModal}>
          Close
        </button>
        {cartItems.length > 0 && (
          <button className={classes.button}>Order</button>
        )}
      </div>
    </Modal>
  );
};

export default Cart;
