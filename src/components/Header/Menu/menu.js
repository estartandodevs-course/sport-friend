import React, { useState } from "react";
import "./menu.scss";
import { Link } from "react-router-dom";
import Dropdown from "./Dropdown/dropDown";
import firebase from "../../../services/firebase";

function Menu(props) {
  const [dropdown, setDropdown] = useState(true);
  async function logout() {
    await firebase.logout();
    // props.history.push('/')
  }

  const toogleDropdown = () => {
    setDropdown(!dropdown);
  };

  return (
    <section>
      <div className="Menu" style={{ left: props.left }}>
        <i onClick={props.close} className="material-icons close">
          close
        </i>
        <div className="containerUser">
          <div className="user">
            <i className="material-icons">perm_identity</i>
          </div>
          <div>
            <h1>{firebase.getCurrentUsername()} </h1>
          </div>
          <div className="user-perfil">
            <Link className="link" to="/perfil">
              <h2>Perfil</h2>
            </Link>
            <Dropdown
              onClick={toogleDropdown}
              close={toogleDropdown}
              className="DropdownShow"
              display={dropdown ? "none" : "flex"}
            />
            <h2>Notificação</h2>
            <Link className="logout" onClick={logout} to="/login">
              <h2>Sair</h2>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
export default Menu;
