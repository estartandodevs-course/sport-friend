import React from 'react';
import "./modalAlert.scss"
import Button from '../Button/button';

export default function ModalAlert(props) {
  return (
    <section className="alert-container">
      <div className="alert-content">
        <p>{props.children}</p>
        <Button className="alert-color" onClick={props.close}>OK</Button>
      </div>
    </section>
  );
}
