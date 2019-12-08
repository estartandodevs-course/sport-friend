import React, { useState } from "react";
import { Link } from "react-router-dom";
import Google from "../../assets/img/google.png"
import Facebook from "../../assets/img/facebook.png"
import Logo from '../../components/Logo/logo'
import "./login.scss"
import firebase from "../../services/firebase";
import Button from "../../components/Button/button"
import banner from "../../assets/img/bg-login.png"

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

    return (
        <section className="containerLogin">
        <div className="banner"> <img src={banner}/> </div>
            
            <form onSubmit={e => e.preventDefault() && false}>
                {/* <label htmlFor="email">Email</label> */}
                <div className="Logo "> <Logo/> </div>
                <input placeholder="Email" className="input placeText" id="email" name="email" autoComplete="off" autoFocus value={email} onChange={e => setEmail(e.target.value)} />

                {/* <label htmlFor="password">Senha</label> */}
                <input placeholder="Senha" className="input placeText" id="password" type="password" name="password" autoComplete="off" value={password} onChange={e => setPassword(e.target.value)} />
                <Button className="submit submitText" type="submit" onClick={login} value="login"/>
                <label className="Textlabel">Esqueceu sua senha ?</label>
                <div className="loginSocial">
                    <h2 className="test placeText">Entrar com</h2>
                    <div className="SocialIcon">
                        <img className="icons" alt="icone do Google" src={Google}></img>
                        <img className="icons iconFace" alt="icone do Facebook" src={Facebook}></img>
                    </div>
                </div>
               <label className="NewUser">Novo usuário ?<Link className="NewUser cadastrar" to="/register">&nbsp;Cadastre-se</Link></label> 
            </form>
            <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet"></link>
        </section>
    );
}
