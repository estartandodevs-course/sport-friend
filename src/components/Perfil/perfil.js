import React from 'react';
import Header from '../Header/header'
import { Link } from "react-router-dom";

import '../Perfil/perfil.scss';

export default function Perfil() {
    return (
        <main>
            <Header />
            <section>
                <div className="user">
                    <i class="material-icons addCircle">add</i>
                    <h1>Adcionar foto</h1>
                </div>
                <input className="input" placeholder="Nome" autoComplete="off" autoFocus />
                <input className="input" placeholder="Sexo" autoComplete="off" autoFocus />
                <input className="input" placeholder="Data" autoComplete="off" />
                <input className="input" placeholder="Celular" autoComplete="off" />
                <input className="input" placeholder="Bairro" autoComplete="off" />
                <div className="box3000">
                    <Link to="/"><button type="submit" className="btns btnsColors">Cancelar</button></Link>
                    <button type="submit" className="btns ">Salvar</button>
                </div>
                <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet"></link>
            </section>
        </main>
    );
}
