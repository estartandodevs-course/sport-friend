import React from 'react';
import Header from '../Header/header'

import './atividades.scss';

export default function MinhasAtividades() {
    return (
        <section>
            <Header />
            <div className="alertAtividade">
                <h2>Opss... você não possui <br/> atividades !!! </h2>
                <h2>Para adicionar uma atividade <br/> clique no botão abaixo.</h2>
            </div>
            <div className="user">
                <i class="material-icons addCircle">add</i>
                <h1>Adcionar atividade</h1>
            </div>
            <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet"></link>
        </section>);
}
