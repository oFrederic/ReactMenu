import React from 'react';

import classes from './AvailableMeals.module.css';

const DUMMY_MEALS = [
  {
    id: 'm1',
    name: 'Sushi',
    description: 'Finest fish and veggies',
    price: 2299,
  },
  {
    id: 'm2',
    name: 'Schnitzel',
    description: 'A german specialty!',
    price: 165,
  },
  {
    id: 'm3',
    name: 'Barbecue Burger',
    description: 'American, raw, meaty',
    price: 1299,
  },
  {
    id: 'm4',
    name: 'Green Bowl',
    description: 'Healthy...and green...',
    price: 1899,
  },
];

const AvailableMeals = () => {
  const mealsList = DUMMY_MEALS.map(meal => <li>{meal.name}</li>);

  return (
    <section className={classes.meals}>
      <ul>{mealsList}</ul>
    </section>
  );
};

export default AvailableMeals;
