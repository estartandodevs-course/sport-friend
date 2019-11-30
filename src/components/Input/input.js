import React from "react";
import "./input.scss";

export default function Input(props) {
  return (
    <>
      {/* <i className="material-icons">lok</i>
      <i className="material-icons">person</i> */}

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
      {/* <input placeholder={Email} /> */}
    </>
  );
}
