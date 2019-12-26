import React, { useState } from "react";
import "./header.scss";
import Menu from "./Menu/menu";

export default function Header(props) {
  const [menu, setMenu] = useState(false);

  const toogleMenu = () => {
    setMenu(!menu);
  };
  return (
    <>
      <header className="header">
        <i onClick={toogleMenu} className="material-icons open-menu" alt="">
          menu
        </i>
        <h1>{props.title}</h1>
      </header>
      <Menu
        close={toogleMenu}
        openMenu={props.openMenu}
        left={menu ? "0" : "-320px"}
      />
    </>
  );
}
