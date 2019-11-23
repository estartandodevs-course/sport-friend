import React from 'react'
import './menu.scss'
import Logout from '../../assets/img/logout.png'
export default function menu(props) {
    return (
        <section>
            <div className="Menu" style={{ left: props.left }}>
                <i onClick={props.close} class="material-icons close">close</i>
                <div className="containerUser">
                    <div class="user">
                        <i class="material-icons">perm_identity</i>
                    </div>
                    <div>
                        <h1>Angelo</h1>
                    </div>
                    <div className="user-perfil">
                        <h2>Perfil</h2>
                        <h2>Minhas atividades</h2>
                        <h2>Historico</h2>
                        <h2>Comentarios</h2>
                        <div className="logout">
                            <img src={Logout} alt="logout"></img>
                            <h2>sair</h2>
                        </div>
                    </div>
                    {/* <Link to="../Login/login"></Link> */}
                </div>
            </div>
        </section>
    )
}