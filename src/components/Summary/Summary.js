import React from 'react';

import classes from './Summary.module.css';

const Summary = () => {
  return (
    <section className={classes.summary}>
      <h2>Outstanding Food, Delivered To You</h2>
      <p>After six successful years in New York, ReactMenu arrive to Tokyo.</p>
      <p>
        Choose your meal from our selection of available meals and enjoy a
        delicious lunch or dinner at home.
      </p>
    </section>
  );
};

export default Summary;
