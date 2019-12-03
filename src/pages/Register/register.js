import React, { useState } from 'react';
import firebase from "../../services/firebase";
import { Link } from "react-router-dom";
import Logo from '../../components/logo/logo'


import './register.scss';

export default function Register(props) {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [passwordConfirm, setPasswordConfirm] = useState("");
    // const [quote, setQuote] = useState("");

    async function onRegister() {
        if(password !== passwordConfirm){
            alert("Por favor, confirme a senha corretamente")
        } else {
            try {
                await firebase.register(name, email, password)
                // await firebase.addQuote(quote)
                props.history.replace("/")
            } catch (error) {
                alert(error.message)
            }
        }
    }

    return (
        <section className="containerRegister">
            <Link to="/login"><i className="material-icons navegate">navigate_before</i></Link>
            <Logo />
            <form onSubmit={e => e.preventDefault() && false}>
                <input className="input" id="name" type="text" name="name" placeholder="Nome" autoComplete="off" autoFocus value={name} onChange={e => setName(e.target.value)} />
                <input className="input" id="email" name="email" placeholder="Email" autoComplete="off" autoFocus value={email} onChange={e => setEmail(e.target.value)} />
                <input className="input" id="password" type="password" name="password" placeholder="Senha" autoComplete="off" autoFocus value={password} onChange={e => setPassword(e.target.value)} />
                <input className="input" id="passwordConfirm" type="password" name="passwordConfirm" placeholder="Confirmar Senha" autoComplete="off" value={passwordConfirm} onChange={e => setPasswordConfirm(e.target.value)} />
                {/* <label htmlFor="password">Apelido</label>
            <input id="quote" type="text" name="quote" autoComplete="off" value={quote} onChange={e => setQuote(e.target.value)} /> */}
                <button type="submit" className="cadastrar" onClick={onRegister} >Cadastrar</button>
            </form>
            {/* <Link to="/">Home</Link> */}
            <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet"></link>
        </section>
    );
}
