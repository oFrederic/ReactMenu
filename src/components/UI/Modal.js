import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';

import classes from './Modal.module.css';

const Backdrop = ({ onClick }) => {
  return <div className={classes.backdrop} onClick={onClick}></div>;
};

const ModalOverlay = ({ children }) => {
  return (
    <div className={classes.modal}>
      <div className={classes.content}>{children}</div>
    </div>
  );
};

const Modal = ({ onToggleModal, children }) => {
  return (
    <Fragment>
      {ReactDOM.createPortal(
        <Backdrop onClick={onToggleModal} />,
        document.getElementById('overlays')
      )}
      {ReactDOM.createPortal(
        <ModalOverlay>{children}</ModalOverlay>,
        document.getElementById('overlays')
      )}
    </Fragment>
  );
};

export default Modal;
