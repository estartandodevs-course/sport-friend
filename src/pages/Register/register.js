import React, { useState } from "react";
import firebase from "../../services/firebase";
import { Link } from "react-router-dom";
import Logo from "../../components/Logo/logo";
import Input from "../../components/Input/input";
import Button from "../../components/Button/button";
import Service from "../../services/index";

import "./register.scss";
import auth from "../../services/auth";

function validarForm() {
  if (form.name == "") {
    alert("Preencha o campo com seu nome");
  } else {
    return true;
  }
}

export default function Register(props) {
  const service = new Service();

  const [form, setForm] = useState({});
  const [firstStep, setFirstStep] = useState(true);
  const [secondStep, setSecondStep] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showPasswordconfirm, setShowPasswordconfirm] = useState(false);

  async function onRegister() {
    if (form.password !== form.passwordConfirm) {
      alert("Por favor, confirme a senha corretamente");
    } else if (validarForm()) {
      try {
        // await firebase.register(name, email, password)
        await firebase.register(form);
        const uidUser = firebase.getCurrentUserUid();
        await service.insertUser({ ...form, uid: uidUser });
        await firebase.login(form.email, form.password);
        auth.login(() => {
          props.history.push("/");
        });
      } catch (error) {
        alert(error.message);
      }
    }
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

    console.log(changeForm);
  }

  async function changeForm(event) {
    await setForm({
      ...form,
      [event.target.name]: event.target.value
    });
    await console.log(form);
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
    <section className="containerRegister">
      <Logo width="125px" />
      <form onSubmit={e => e.preventDefault() && false}>
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
              placeholder="Nome"
              autoComplete="off"
              autoFocus={true}
              value={nome}
              onChange={e => changeForm(e)}
              // onChange={e => setNome(e.target.value)}
              // onChange={e => validarForm(e.target.value)}
              // onSubmit={() => validarForm()}
            />
            <Input
              id="age "
              type="text"
              name="age"
              placeholder="Idade"
              autoComplete="off"
              onChange={e => changeForm(e)}
            />
            <Input
              id="datebirth"
              type="text"
              name="datebirth"
              placeholder="Data de Nascimento"
              autoComplete="off"
              onChange={e => changeForm(e)}
            />
            <Input
              id="adress"
              type="text"
              name="adress"
              placeholder="Endereço"
              autoComplete="off"
              onChange={e => changeForm(e)}
            />

            <Button type="submit" onClick={() => changeStep()}>
              Próximo
            </Button>
          </>
        ) : null}
        {secondStep ? (
          <>
            <span className="step">2/2</span>
            <i onClick={() => changeStep()} className="material-icons navegate">
              navigate_before
            </i>
            <Input
              id="email"
              type="email"
              name="email"
              placeholder="Email"
              autoComplete="off"
              onChange={e => changeForm(e)}
            />
            <Input
              id="password"
              onClickIcon={handleShowPassword}
              type={showPassword ? "text" : "password"}
              name="password"
              placeholder="Senha"
              icon="visibility_off"
              autoComplete="off"
              onChange={e => changeForm(e)}
            />
            <Input
              id="passwordConfirm"
              onClickIcon={handleShowPasswordconfirm}
              type={showPasswordconfirm ? "text" : "password"}
              name="passwordConfirm"
              placeholder="Confirmar Senha"
              icon="visibility_off"
              autoComplete="off"
              onChange={e => changeForm(e)}
            />

            <Button type="submit" onClick={onRegister}>
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
  );
}
