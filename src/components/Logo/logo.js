import React from 'react';
import logo from '../../assets/img/logo.png';
import './logo.scss';

export default function Logo(props) {
    return (
        <img src={logo} style={{height: props.height, width: props.width }} alt="SportFriend Logo" className="logo" />
    );
}
