import React from 'react'
import './menu.scss'
import { directive } from '@babel/types';

export default function menu(props) {
    return (
        <div className="Menu"
        style={{left:props.left}}>  
        </div>
    )
}