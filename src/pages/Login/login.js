import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./login.scss"
import firebase from "../../services/firebase";

export default function Login(props) {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    async function login() {
        try {
            await firebase.login(email, password);
            props.history.replace("/")
        } catch (error) {
            alert(error.menssage)
        }
    }

    const getNextId = () => {
        // Trying to get the last id from db --WIP
        // const arrSorted = loginService.getSortBy("id");
        // const lastId = arrSorted.pop().id;

        // incorrect way, need to get the last id from the database not from the state.
        const lastId = newUser.id;
        console.log(lastId);
        setNewUser({
            id: (lastId + 1)
        })
        console.log("Last Id --->" + newUser.id);
    }

    return (
        <section>
            <h1 className="login-title"> Login </h1>

            <form onSubmit={e=> e.preventDefault() && false}>
                <label htmlFor="email">Email</label>
                <input id="email" name="email" autoComplete="off" autoFocus value={email} onChange={e => setEmail(e.target.value)} />

                <label htmlFor="password">Senha</label>
                <input id="password" type="password" name="password" autoComplete="off"value={password} onChange={e => setPassword(e.target.value)} />

                <button type="submit" onClick={login} >Login</button>
                <Link to="/register">Cadastre-se</Link> 
            </form>

            {/* <Link to="/">Home</Link> */}

        </section>  
    );
}
