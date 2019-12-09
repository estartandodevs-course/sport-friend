import React, { useState } from "react";
import { sportTypes } from "../../data/sportTypes";
import meetingPoints from "../../data/meetingPoint";
import Clock from "../../assets/img/clock.png";
import Calendar from "../../assets/img/Calendario.png";
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
          <i onClick={props.close} className="material-icons closeModal">
            close
          </i>
          <form>
            <h2 className="descripitionInput">Atividade</h2>
            <div className="containerSporte">
              {sportTypes.map((sport, key) => {
                return (
                  <div key={sport.id} className="sports">
                    <img className="sportImg" src={sport.imagem} alt="" />
                  </div>
                );
              })}
            </div>

            <h2 className="descripitionInput">Ponto de Encontro</h2>
            <select className="formInput">
              {meetingPoints.map((meetingPoint, key) => {
                return <option>{meetingPoint.meeting_point}</option>;
              })}
            </select>

            <h2 className="descripitionInput">Descrição</h2>
            <input
              className="formInput"
              type="text"
              placeholder="Descrição"
            ></input>
            <div className="formTime">
              <img src={Clock} alt="clock"></img>
              <h2>Hora:</h2>
              <p>Início</p>
              <input className="Input" type="time" value="00:00"></input>
              <p>Até</p>
              <input className="Input" type="time" value="00:00"></input>
            </div>
            <div className="formTime">
              <img src={Calendar} alt="clock"></img>
              <h2>Data:</h2>
              <p>Dia</p>
              <input className="Input" type="number"></input>
              <p>Mês</p>
              <input className="Input" type="number"></input>
              <p>Ano</p>
              <input className="Input" type="number"></input>
            </div>
          </form>
          <div className="btns">
            <button>Cancelar</button>
            <button onClick={() => props.action(activity)}>Publicar</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Modal;
