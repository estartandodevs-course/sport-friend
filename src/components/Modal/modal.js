import React, { useState } from "react";
import ReactDOM from "react-dom";
import './modal.scss';




function Modal (props) {
  const [show, setShow] = useState(false); 

  const toogleModal = () => {
    setShow( !show );
    console.log(show)
  }

    return (
      <>
      <h1>Modal</h1>
        {show ? ( 
        <div className="Fundo">
          <div className="modal-container" >
            <p onClick={toogleModal}>close modal</p>
            <div>{props.children}</div>
          </div>
        </div>
        ) : (
          <button type="button" onClick={toogleModal}>
          Open Modal
        </button>
        )}
      </>
  );
}


export default Modal;

