import React, { useState, useEffect } from "react";
import "./menu.scss";
import { Link } from "react-router-dom";
import Dropdown from "./Dropdown/dropDown";
import firebase from "../../../services/firebase";
import user from "../../../assets/img/user.png";
import Auth from "../../../services/auth";

function Menu(props) {
  const auth = new Auth();
  const [isLogged, setLogged] = useState(false);
  const [dropdown, setDropdown] = useState(true);
  async function logout() {
    await firebase.logout();
    // props.history.push('/')
  }

  useEffect(() => {
    auth.isAuthenticated() ? setLogged(true) : setLogged(false);
  }, []);

  const toogleDropdown = () => {
    setDropdown(!dropdown);
  };

  return (
    <section>
      <div className="Menu" style={{ left: props.left }}>
        <i onClick={props.close} className="material-icons close">
          keyboard_arrow_left
        </i>
        <div className="containerUser">
          <div className="user">
            {/* <i className="material-icons">perm_identity</i> */}
            <img
              src={
                isLogged
                  ? firebase.getCurrentUserProfile().photoURL
                    ? firebase.getCurrentUserProfile().photoURL
                    : user
                  : user
              }
              alt="user"
            />
          </div>
          <h1>{firebase.getCurrentUsername()} </h1>
          <div className="user-perfil">
            <Link className="link" to="/perfil">
              <h2>Perfil</h2>
            </Link>
            <Link className="link" to="/">
              <h2>Página inicial</h2>
            </Link>
            <Dropdown
              onClick={toogleDropdown}
              close={toogleDropdown}
              className="DropdownShow"
              display={dropdown ? "none" : "flex"}
            />
            {/* <h2>Notificação</h2> */}
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
