import React, { useState } from "react";
import { sportTypes } from "../../data/sportTypes";
import meetingPoints from "../../data/meetingPoint";
import Img from "../../assets/img.js";
import Input from "../Input/input";
import Button from "../Button/button";

import Clock from "../../assets/img/clock.png";
// import Calendar from "../../assets/img/Calendario.png";
import "./modal.scss";

function Modal(props) {
  // var x = document.getElementById("demo");

  // function getLocation() {
  //   if (navigator.geolocation) {
  //     navigator.geolocation.getCurrentPosition(showPosition);
  //   } else {
  //     x.innerHTML = "Geolocation is not supported by this browser.";
  //   }
  // }

  // function showPosition(position) {
  //   x.innerHTML = "Latitude: " + position.coords.latitude +
  //     "<br>Longitude: " + position.coords.longitude;
  // }

  const activity = {
    type: "Caminhar",
    author: {
      name: "Breno"
    },
    description: "Leve caminhada",
    date: {
      day: 5,
      month: 12,
      year: 2019
    },
    moment: {
      start_hour: "10:00",
      finish_hour: "11:00"
    },
    meeting_point: "Pedra de Guaratiba"
  };

  return (
    <div style={{ display: props.display }}>
      <div className="main">
        <div className="modal-container">
          <form>
            <h2 className="descripitionInput">Escolha a atividade:</h2>
            <div className="containerSporte">
              {sportTypes.map((sport, key) => {
                return (
                  <div key={sport.id} className="containerSports">
                    <div className="sports ">
                      <img className="sportImg" src={sport.imagem} alt="" />
                    </div>
                  </div>
                );
              })}
            </div>

            <h2 className="descripitionInput">Defina o ponto de encontro:</h2>
            <select className="formInput">
              {meetingPoints.map((meetingPoint, key) => {
                return <option>{meetingPoint.meeting_point}</option>;
              })}
            </select>

            <div className="containerFormTime">
              <div className="formTime">
                <img src={Img.clock} alt="clock"></img>
                <Input
                  className="Input"
                  type="number"
                  placeholder="Hora Inicial"
                />
                <img src={Img.clock} alt="clock"></img>
                <Input
                  className="Input"
                  type="number"
                  placeholder="Hora Final"
                />
              </div>
            </div>
            <div className="containerFormTime">
              <Input className="Input Date" type="number" placeholder="Data" />
            </div>
            <h2 className="descripitionInput">Descrição</h2>
            <textarea
              className="descriçaoAtividade"
              id="message"
              placeholder="Digite sua mensagem aqui"
            ></textarea>
          </form>
          <div className="btns">
            <Button className="modalBtn">Cancelar</Button>
            <Button
              className="modalBtn btnSecundario"
              onClick={() => props.action(activity)}
            >
              Publicar
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Modal;
