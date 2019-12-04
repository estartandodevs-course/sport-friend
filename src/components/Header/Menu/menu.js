import React from 'react'
import './menu.scss'
import { Link } from "react-router-dom";
import firebase from "../../../services/firebase"

export default function menu(props) {

     async function logout() {
		await firebase.logout()
		// props.history.push('/')
	}

    return (
        <section>
            <div className="Menu" style={{ left: props.left }}>
                <i onClick={props.close} className="material-icons close">close</i>
                <div className="containerUser">
                    <div className="user">
                        <i className="material-icons">perm_identity</i>
                    </div>
                    <div>
                        <h1>{firebase.getCurrentUsername()} </h1>
                    </div>
                    <div className="user-perfil">
                        <Link className="link" to="/perfil"><h2>Perfil</h2></Link>
                        <Link className="link" to="/my-activities"><h2>Minhas atividade</h2></Link>
                        <h2>Notificação</h2>
                        {/* <h2>Historico</h2>
                        <h2>Comentarios</h2> */}
                        <Link className="logout" onClick={logout} to="/login">
                            <h2>Sair</h2>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    )
}