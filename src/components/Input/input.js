import React from "react";
import "./input.scss";

export default function Input(props) {
  return (
    <>
      {props.icon ? <i className="material-icons">{props.icon}</i> : null}

      <input
        className={props.className ? props.className + " input" : "input"}
        type={props.type}
        placeholder={props.placeholder}
        onChange={props.onChange}
        id={props.id}
        name={props.name}
        autoComplete={props.autoComplete}
        autoFocus={props.autoFocus}
      />
    </>
  );
}
