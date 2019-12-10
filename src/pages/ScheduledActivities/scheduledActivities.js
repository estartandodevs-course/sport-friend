import React from "react";

import { Link } from "react-router-dom";
import Header from "../../components/Header/header";

import "./scheduledActivities.scss";
// import { Container } from './styles';

export default function ScheduledActivities() {
  return (
    <section className="containerAtividades">
      <Header className="borderBotton" />
      <div className="alertAtividade">
        <h2>
          Para adicionar uma atividade <br /> clique no botão abaixo.
        </h2>
      </div>
      <div className="user">
        <Link to="/">
          <i className="material-icons addCircle">add</i>
        </Link>
        <h1>Escolher atividade</h1>
      </div>
      <Link
        href="https://fonts.googleapis.com/icon?family=Material+Icons"
        rel="stylesheet"
      ></Link>
    </section>
  );
}
