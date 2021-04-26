import React from 'react';

import classes from './Summary.module.css';

const Summary = () => {
  return (
    <section className={classes.summary}>
      <h2>Outstanding food delivered to your door</h2>
      <p>After six successful years in New York, ReactMenu arrive to Tokyo.</p>
      <p>
        Choose your meal from our favorite selection of the week and enjoy a
        delicious home-cooked meals at home.
      </p>
    </section>
  );
};

export default Summary;
