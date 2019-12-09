import React from "react";
import "./modalActivity.scss";
import Map from "../Maps/maps";
import Clock from "../../assets/img/alarm-clock.png";
import Calendario from "../../assets/img/Calendario.svg";
import Local from "../../assets/img/Local.svg";
import Button from "../../components/Button/button";

export default function ModalActivity(props) {
  return (
    <main className="containerModal">
      <div className="modal">
        <i onClick={props.close} className="material-icons closeModal">
          close
        </i>
        <section>
          <div className="user">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_Mstcwa_KvZBi8-zxjR9NwVRD-fIye-_7bxRq19F9hylyqJcT"
              alt="Alan"
            />
            <h2>Alan</h2>
          </div>
          <div className="userPerfil">
            <img src={Clock} alt=""></img>
            <img src={Calendario} alt=""></img>
            <img src={Local} alt=""></img>
          </div>
          <div className="Texts">
            <p>
              {props.card.moment.start_hour} - {props.card.moment.finish_hour}
            </p>
            <p>
              {props.card.date.day}/{props.card.date.month}/
              {props.card.date.year}
            </p>
            <p>{props.card.place}</p>
          </div>
        </section>
        <div className="description">
          <h2>{props.card.description}</h2>
        </div>
        <Map />
        <Button className="btnConfirmar " value="Confirmar Atividade" />
      </div>
    </main>
  );
}
