import React, { useState } from "react";
import { Link } from "react-router-dom";
import Google from "../../assets/img/google.png";
import Facebook from "../../assets/img/facebook.png";
import Logo from "../../components/Logo/logo";
import "./login.scss";
import firebase from "../../services/firebase";
import Button from "../../components/Button/button";
import Input from "../../components/Input/input";
import banner from "../../assets/img/bg-login.png";

export default function Login(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function login() {
    try {
      await firebase.login(email, password);
      props.history.replace("/");
    } catch (error) {
      alert(error.menssage);
    }
  }

  return (
    <section className="container-login">
      <section className="content-login">
          <img className="banner" src={banner} alt="Banner" />

        <form onSubmit={e => e.preventDefault() && false}>
          <div className="Logo ">
            <Logo />
          </div>
          <Input
            placeholder="Email"
            icon="perm_identity"
            id="email"
            style={{ width: 280 + "px" }}
            autoFocus
            value={email}
            type="text"
            onChange={e => setEmail(e.target.value)}
          />
          <Input
            placeholder="Senha"
            icon="lock"
            id="password"
            type="password"
            name="password"
            style={{ width: 280 + "px" }}
            value={password}
            onChange={e => setPassword(e.target.value)}
          />
          <Button
            type="submit"
            onClick={login}
            value="Entrar"
            style={{backgroundColor: "#F06033", color:"#fff", cursor: "pointer",
            width: "280px",
            height: "36px",
            boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
            borderRadius: "24px",
            border: "none",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            marginTop: "10px",
            marginBottom: "10px",
            outline: "none",
            color: "#ffffff",
            textAlign: "center",
            fontFamily: "Roboto",
            fontStyle: "normal",
            fontWeight: "500",
            fontSize: "18px",
          }}
          />
          <label className="Textlabel">Esqueceu sua senha ?</label>
          <div className="loginSocial">
            <h2 className="test placeText">Entrar com</h2>
            <div className="SocialIcon">
              <img className="icons" alt="icone do Google" src={Google}></img>
              <img
                className="icons iconFace"
                alt="icone do Facebook"
                src={Facebook}
              ></img>
            </div>
          </div>
          <label className="NewUser">
            Novo usuário ?
            <Link className="NewUser cadastrar" to="/register">
              &nbsp;Cadastre-se
            </Link>
          </label>
        </form>
        <link
          href="https://fonts.googleapis.com/icon?family=Material+Icons"
          rel="stylesheet"
        ></link>
      </section>
    </section>
  );
}
