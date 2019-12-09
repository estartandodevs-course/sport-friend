import React, { useState } from "react";
import Header from "../../components/Header/header";
import Modal from "../../components/Modal/modal";
import "./myActivities.scss";
import { Service } from "../../services";

export default function MyActivities(props) {
  const service = new Service();

  const [modal, setModal] = useState(true);

  const insertActivity = activity => {
    service.insertActivity(activity);
  };

  const toogleModal = () => {
    setModal(!modal);
  };
  return (
    <section className="containerAtividades">
      <Header />
      <div className="alertAtividade">
        <h2>
          Opss... você não possui <br /> atividades !!!{" "}
        </h2>
        <h2>
          Para adicionar uma atividade <br /> clique no botão abaixo.
        </h2>
      </div>
      <div className="user">
        <i onClick={toogleModal} className="material-icons addCircle">
          add
        </i>
        <h1>Adcionar atividade</h1>
        <Modal
          close={toogleModal}
          action={insertActivity}
          openModal={props.openModal}
          display={modal ? "none" : "flex"}
        />
      </div>
      <link
        href="https://fonts.googleapis.com/icon?family=Material+Icons"
        rel="stylesheet"
      ></link>
    </section>
  );
}
