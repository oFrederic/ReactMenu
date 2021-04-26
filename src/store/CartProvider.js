import React, { useReducer } from 'react';

import CartContext from './cart-context';

const cartReducer = (state, action) => {
  switch (action.type) {
    case 'ADD': {
      const items = [...state.items];
      const index = items.findIndex(item => item.id === action.item.id);
      index >= 0
        ? (items[index].amount += action.item.amount)
        : items.push(action.item);
      const totalAmount =
        state.totalAmount + action.item.price * action.item.amount;

      return {
        items: items,
        totalAmount: totalAmount,
      };
    }

    case 'REMOVE': {
      const items = [...state.items];
      const index = items.findIndex(item => item.id === action.id);
      const price = items[index].price;
      items[index].amount !== 1
        ? items[index].amount--
        : items.splice(index, 1);
      const totalAmount = state.totalAmount - price;

      return {
        items: items,
        totalAmount: totalAmount,
      };
    }

    default:
      throw new Error();
  }
};

const CartProvider = ({ children }) => {
  const [cart, dispatchCart] = useReducer(cartReducer, {
    items: [],
    totalAmount: 0,
  });

  const addItem = item => {
    dispatchCart({ type: 'ADD', item: item });
  };

  const removeItem = id => {
    dispatchCart({ type: 'REMOVE', id: id });
  };

  const cartContext = {
    items: cart.items,
    totalAmount: cart.totalAmount,
    addItem: addItem,
    removeItem: removeItem,
  };

  return (
    <CartContext.Provider value={cartContext}>{children}</CartContext.Provider>
  );
};

export default CartProvider;
