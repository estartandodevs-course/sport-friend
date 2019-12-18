import React from 'react';
import Header from '../../components/Header/header'
import { Link } from "react-router-dom";
import Button from "../../components/Button/button"
import '../Perfil/perfil.scss';

export default function Perfil(props) {
    return (
        <main className="space-menu">
            <Header />
            <section className="containerPerfil">
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
                    <Link to="/">
                        <Button 
                        className="btns" 
                        type="submit"
                        >Cancelar</Button>
                    </Link>                    
                    <Button className="btns btnsColors " type="submit">Salvar</Button>
                </div>
                <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet"></link>
            </section>
        </main>
    );
}
