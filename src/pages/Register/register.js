import React, { useState } from "react";
import firebase from "../../services/firebase";
import { Link } from "react-router-dom";
import Logo from "../../components/Logo/logo";
import Input from "../../components/Input/input";
import Button from "../../components/Button/button";
import Service from "../../services/index";
import ModalAlert from "../../components/ModalAlert/modalAlert";

import "./register.scss";
// import Auth from "../../services/auth";
export default function Register(props) {
  const service = new Service();
  //   const auth = new Auth();

  const [form, setForm] = useState({});
  const [firstStep, setFirstStep] = useState(true);
  const [secondStep, setSecondStep] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showPasswordconfirm, setShowPasswordconfirm] = useState(false);

  const [displayName, setDisplayName] = useState("");
  // const [idade, setIdade] = useState("");
  const [email, setEmail] = useState("");
  // const [age, setAge] = useState("");
  const [dataNascimento, setDataNascimento] = useState("");
  const [endereco, setEndereco] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [alert, setAlert] = useState({ show: false, content: "" });

  async function validarFirstStep() {
    if (displayName === "") {
      setAlert({ show: true, content: "Digite seu nome" });
    } else if (dataNascimento === "") {
      setAlert({ show: true, content: "Digite sua data de nascimento" });
    } else if (endereco === "") {
      setAlert({ show: true, content: "Digite seu endereço" });
    } else {
      changeStep();
    }
  }

  async function validarSecondStep() {
    if (email === "") {
      setAlert({ show: true, content: "Digite seu email" });
    } else if (password === "") {
      setAlert({ show: true, content: "Digite sua senha" });
    } else if (confirmPassword === "") {
      setAlert({ show: true, content: "Digite sua confirmação de senha" });
    } else if (confirmPassword !== password) {
      setAlert({ show: true, content: "As senhas não conferem" });
    } else {
      onRegister();
    }
  }

  async function onRegister() {
    console.log(getFormObject());
    try {
      // await firebase.register(name, email, password)
      await firebase.register(getFormObject());
      const uidUser = await firebase.getCurrentUserUid();
      await service.insertUser({ ...getFormObject(), uid: uidUser });
      // await firebase.login(form.email, form.password);
      // Auth.login()
      props.history.push("/login");
    } catch (error) {
      console.error(error);
    }
  }

  function getFormObject() {
    return {
      email,
      password,
      endereco,
      dataNascimento,
      displayName
    };
  }

  function handleShowPassword() {
    if (showPassword) {
      setShowPassword(false);
    } else if (!showPassword) {
      setShowPassword(true);
    }
  }
  function handleShowPasswordconfirm() {
    if (showPasswordconfirm) {
      setShowPasswordconfirm(false);
    } else if (!showPasswordconfirm) {
      setShowPasswordconfirm(true);
    }
  }

  function changeStep() {
    if (firstStep) {
      setFirstStep(false);
      setSecondStep(true);
      return;
    } else if (secondStep) {
      setSecondStep(false);
      setFirstStep(true);
    }
  }
  return (
    <>
      <section className="containerRegister">
        <Logo width="125px" />
        <form onSubmit={e => e.preventDefault()}>
          {firstStep ? (
            <>
              <span className="step">1/2</span>
              <Link to="/login">
                <i className="material-icons navegate">navigate_before</i>
              </Link>
              <Input
                id="name"
                type="text"
                name="name"
                placeholder="Nome "
                autoComplete="off"
                autoFocus={true}
                onChange={e => setDisplayName(e.target.value)}
              />
              {/* <Input
                id="age"
                type="text"
                name="age"
                placeholder="Idade"
                autoComplete="off"
                onChange={(e => setIdade(e.target.value))}
              /> */}
              <Input
                id="datebirth"
                type="text"
                name="datebirth"
                placeholder="Data de Nascimento"
                autoComplete="off"
                onChange={e => setDataNascimento(e.target.value)}
              />
              <Input
                id="adress"
                type="text"
                name="adress"
                placeholder="Endereço"
                autoComplete="off"
                onChange={e => setEndereco(e.target.value)}
              />

              <Button type="submit" onClick={validarFirstStep}>
                Próximo
              </Button>
            </>
          ) : null}
          {secondStep ? (
            <>
              <span className="step">2/2</span>
              <i
                onClick={() => changeStep()}
                className="material-icons navegate"
              >
                navigate_before
              </i>
              <Input
                id="email"
                type="email"
                name="email"
                autoFocus={true}
                placeholder="Email *"
                autoComplete="off"
                onChange={e => setEmail(e.target.value)}
              />
              <Input
                id="password"
                onClickIcon={handleShowPassword}
                type={showPassword ? "text" : "password"}
                name="password"
                placeholder="Senha *"
                icon="visibility_off"
                autoComplete="off"
                onChange={e => setPassword(e.target.value)}
              />
              <Input
                id="passwordConfirm"
                onClickIcon={handleShowPasswordconfirm}
                type={showPasswordconfirm ? "text" : "password"}
                name="passwordConfirm"
                placeholder="Confirmar Senha *"
                icon="visibility_off"
                autoComplete="off"
                onChange={e => setConfirmPassword(e.target.value)}
              />

              <Button type="submit" onClick={validarSecondStep}>
                Cadastrar
              </Button>
            </>
          ) : null}
        </form>
        <link
          href="https://fonts.googleapis.com/icon?family=Material+Icons"
          rel="stylesheet"
        ></link>
      </section>
      {alert.show ? (
        <ModalAlert close={() => setAlert(false)}>{alert.content}</ModalAlert>
      ) : null}
    </>
  );
}
