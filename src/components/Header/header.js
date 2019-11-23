import React, { useState } from 'react';
import './header.scss';
import Menu from '../Menu/menu'
import detalis from '../../assets/img/menu.svg'

export default function Header(props) {

    const [menu, setMenu] = useState(false);

    const toogleMenu = () => {
        setMenu(!menu)
    }
    return (
        <div>
            <img onClick={toogleMenu} src={detalis} className="menu" alt="" />
            <Menu close={toogleMenu} className="openMenu" openMenu={props.openMenu} left={menu ? "0" : "-320px"} />
        </div>
    );
}