import React from 'react';
import InputMask from 'react-input-mask';
import "./inputMask.scss"

export default function InputMaskReact(props) {
  return (
    <div className="label-float-mask">

      <InputMask
        type={props.type}
        className="react-input-mask"
        // placeholder={props.placeholder}
        mask={props.mask}
        name={props.name}
        onChange={props.onChange}
        value={props.value}
        style={{width: props.width, color: props.color}}
        autoComplete="off"
        />
        <label>{props.placeholder}</label>
    </div>
  );
}
