import React, { useRef, useState } from 'react';
import Input from '../../UI/Input';

import classes from './MealItemForm.module.css';

const MealItemForm = ({ onAddToCart }) => {
  const inputRef = useRef();

  const submitHandler = event => {
    event.preventDefault();
    if (inputRef.current.value.trim().length === 0) return;
    onAddToCart(Number(inputRef.current.value));
  };

  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <Input
        ref={inputRef}
        label="Amount"
        input={{
          id: 'amount',
          type: 'number',
          min: 1,
          max: 5,
          step: 1,
          defaultValue: 1,
        }}
      />
      <button type="submit">+ Add</button>
    </form>
  );
};

export default MealItemForm;
