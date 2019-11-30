import React, { useState } from 'react';
import './header.scss';
import Menu from '../Menu/menu'

export default function Header(props) {

    const [menu, setMenu] = useState(false);

    const toogleMenu = () => {
        setMenu(!menu)
    }
    return (
        <div className="Menu_Bar">
            <i onClick={toogleMenu} className="material-icons menu" alt="">menu</i>
            <Menu close={toogleMenu} className="openMenu" openMenu={props.openMenu} left={menu ? "0" : "-320px"} />
        </div>
    );
}