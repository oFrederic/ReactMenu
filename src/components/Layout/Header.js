import React, { Fragment } from 'react';

import menuImage from '../../assets/menu.jpg';
import HeaderCartButton from './HeaderCartButton';
import classes from './Header.module.css';

const Header = () => {
  return (
    <Fragment>
      <header className={classes.header}>
        <h1>ReactMenu</h1>
        <HeaderCartButton />
      </header>
      <div className={classes['main-image']}>
        <img src={menuImage} alt={'romantic table with food'} />
      </div>
    </Fragment>
  );
};

export default Header;
