import React, { useContext } from 'react';

import MealItemForm from './MealItemForm';
import CartContext from '../../../store/cart-context';
import classes from './MealItem.module.css';

const MealItem = ({ id, name, description, price }) => {
  const cartContext = useContext(CartContext);

  const AddToCartHandler = amount => {
    const newMeal = { id: id, name: name, amount: amount, price: price };
    cartContext.addItem(newMeal);
  };

  return (
    <li className={classes.meal}>
      <div>
        <h3>{name}</h3>
        <div className={classes.description}>{description}</div>
        <div className={classes.price}>{`¥${price}`}</div>
      </div>
      <div>
        <MealItemForm onAddToCart={AddToCartHandler} />
      </div>
    </li>
  );
};

export default MealItem;
