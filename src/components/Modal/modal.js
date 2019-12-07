import React, { useState } from "react";
import ReactDOM from "react-dom";
import { sportTypes } from '../../data/sportTypes.js'
import Clock from '../../assets/img/clock.png'
import Calendar from '../../assets/img/Calendario.png'
import './modal.scss';

function Modal(props) {
  var x = document.getElementById("demo");

  function getLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(showPosition);
    } else {
      x.innerHTML = "Geolocation is not supported by this browser.";
    }
  }

  function showPosition(position) {
    x.innerHTML = "Latitude: " + position.coords.latitude +
      "<br>Longitude: " + position.coords.longitude;
  }

  return (
    <div style={{ display: props.display }}>
      <div className="main">
        <div className="modal-container" >
          <i onClick={props.close} className="material-icons closeModal">close</i>
          <form>
            <select className="formInput">
              {sportTypes.map(sport => {
                return (
                  <option>
                    {sport.name}
                  </option>
                )
              })}
            </select>
            <input className="formInput" type="text" placeholder="Ponto de Encontro"></input>
            <input className="formInput" type="text" placeholder="Descrição"></input>
            <div className="formTime">
              <img src={Clock} alt="clock"></img>
              <h2>Hora:</h2>
              <p>Início</p>
              <input className="Input" type="time" value="00:00" ></input>
              <p>Até</p>
              <input className="Input" type="time" value="00:00" ></input>
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
            <button>Publicar</button>
          </div>
        </div>
      </div>
    </div>
  );
}


export default Modal;

