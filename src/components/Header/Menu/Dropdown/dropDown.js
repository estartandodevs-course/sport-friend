import React from "react";
import "./dropDown.scss";
import { Link } from "react-router-dom";

export default function dropDown(props) {
  return (
    <div className="containerDropdown">
      <div onClick={props.close} className="DropdownShow">
        <h2 className="link">Atividades</h2>
        <i className="material-icons arrow_down">keyboard_arrow_down</i>
      </div>
      <div className="dropDownDetalis" style={{ display: props.display }}>
        <Link className="link" to="/my-activities">
          <h2>Minhas Atividades</h2>
        </Link>
        <Link className="link" to="/scheduled-activities">
          <h2>Atividades Agendadas</h2>
        </Link>
      </div>
    </div>
  );
}
