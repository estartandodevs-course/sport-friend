import React from "react";
import "./input.scss";

export default function Input(props) {
  return (
    <>
      {/* {props.icon ? <i className="material-icons">{props.icon}</i> : null} */}

      {/* <input
        className={props.className ? props.className + " input" : "input"}
        type={props.type}
        placeholder={props.placeholder}
        onChange={props.onChange}
        id={props.id}
        name={props.name}
        autoComplete={props.autoComplete}
        autoFocus={props.autoFocus}
      /> */}

      <div className="label-float">
        <input 
          // className={props.className ? props.className + " input" : "input"}
          id={props.id} 
          name={props.name} 
          type={props.type} 
          placeholder=" " 
          onChange={props.onChange} 
          autoComplete={props.autoComplete}
          autoFocus={props.autoFocus}
          style={props.style}
          />
        <label>{props.placeholder}</label>
        {props.icon ? <i onClick={props.onClickIcon} className="material-icons">{props.icon}</i> : null}
      </div>

    </>
  );
}
