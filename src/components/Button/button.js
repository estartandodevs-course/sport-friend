import React from 'react';

import './button.scss';

export default function Button(props) {
  return (
    <>
      <button
        className={props.className ? props.className + "button" : "button"}
        type={props.type}
        onChange={props.onChange}
        id={props.id}
        autoFocus={props.autoFocus}
        onClick={props.onClick}
      >
        {props.value}
      </button>
    </>
  );
}
