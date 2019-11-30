import React from 'react'
import './menu.scss'

export default function menu(props) {
    return (
        <div className="Menu"
        style={{ left: props.left }}>
            <i onClick={props.close} class="material-icons ">close</i>
        </div>
    )
}