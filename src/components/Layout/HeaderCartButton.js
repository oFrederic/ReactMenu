import React, { useContext, useEffect, useState } from 'react';

import CartIcon from '../Cart/CartIcon';
import CartContext from '../../store/cart-context';
import classes from './HeaderCartButton.module.css';

const HeaderCartButton = ({ onClick }) => {
  const [highlightBtn, setHighlightBtn] = useState(false);
  const cartContext = useContext(CartContext);

  const cartSize = cartContext.items.reduce(
    (size, item) => size + item.amount,
    0
  );

  const btnClasses = `${classes.button} ${highlightBtn ? classes.bump : ''}`;

  useEffect(() => {
    if (cartContext.items.length <= 0) return;
    setHighlightBtn(true);

    const timer = setTimeout(() => {
      setHighlightBtn(false);
    }, 300);

    return () => {
      clearTimeout(timer);
    };
  }, [cartContext.items]);

  return (
    <button className={btnClasses} onClick={onClick}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={classes.badge}>{cartSize}</span>
    </button>
  );
};

export default HeaderCartButton;
