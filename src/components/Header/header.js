import React, { useState } from 'react';
import './header.scss';
import Menu from '../Menu/menu'

export default function Header(props) {

    const [menu, setMenu] = useState(false);

    const toogleMenu = () => {
        setMenu(!menu)
    }
    return (
        <div className="box">
            <i onClick={toogleMenu} class="material-icons detalis">menu</i>
            <Menu close={toogleMenu} className="openMenu" openMenu={props.openMenu} left={menu ? "0" : "-320px"} />
        </div>
    );
}