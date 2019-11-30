import React, { useState } from 'react';
import firebase from "../../services/firebase";
import { Link } from "react-router-dom";


// import { Container } from './styles';

export default function Register(props) {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    // const [quote, setQuote] = useState("");

    async function onRegister() {
        try {
            await firebase.register(name, email, password)
            // await firebase.addQuote(quote)
            props.history.replace("/")
        } catch (error) {
            alert(error.message)
        }
    }

  return (
    <>
       <h1 className="login-title"> Cadastre-se </h1>

        <form onSubmit={e=> e.preventDefault() && false}>
            <label htmlFor="email">Nome</label>
            <input id="name" name="name" autoComplete="off" autoFocus value={name} onChange={e => setName(e.target.value)} />

            <label htmlFor="email">Email</label>
            <input id="email" name="email" autoComplete="off" autoFocus value={email} onChange={e => setEmail(e.target.value)} />

            <label htmlFor="password">Senha</label>
            <input id="password" type="password" name="password" autoComplete="off"value={password} onChange={e => setPassword(e.target.value)} />

            {/* <label htmlFor="password">Apelido</label>
            <input id="quote" type="text" name="quote" autoComplete="off" value={quote} onChange={e => setQuote(e.target.value)} /> */}

            <button type="submit" onClick={onRegister} >Cadastrar</button>
            <Link to="/login">Voltar para Login</Link> 
        </form>

        <Link to="/">Home</Link>

    </>
  );
}
