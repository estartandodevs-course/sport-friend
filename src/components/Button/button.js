import React from 'react';

import './button.scss';

export default function Button(props) {
  return (
    <>
      <button
        className={props.className ? `button-default ${props.className}` : "button-default"}
        type={props.type}
        onChange={props.onChange}
        id={props.id}
        autoFocus={props.autoFocus}
        onClick={props.onClick}
        style={props.style}
      >
        {props.children}
      </button>
    </>
  );
}
