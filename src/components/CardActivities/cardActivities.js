import React from 'react';
import './cardActivities.scss';
import Img from '../../assets/img.js'

export default function CardActivities(props) {

  // const imgs = Img;

  const imagens = {
    "Futebol":Img.footballActive,
    "Bicicleta": Img.frameActive,
    "Exercícios": Img.gymActive,
    "Corrida": Img.runningActive,
    "Skate": Img.skateActive,
    "Caminhar": Img.walkActive
  }

  return (
    <section className="card">
      <div className="sport">
        <img src={imagens[`${props.data.type}`]} className="sport-img" alt="atividade" />
        <p>{props.data.type}</p>
      </div>
      <div className="stats">
          <div className="stats-content">
            <img src={Img.clock} alt="" />
            <p>{props.data.moment.start_hour} - {props.data.moment.finish_hour}</p>
          </div>
          <div className="stats-content">
            <img src={Img.calendar} alt="" />
            <p>{props.data.date.date}</p>
          </div>
          <div className="stats-content">
            <img className="location-icon" src={Img.location} alt="" />
            <p>{props.data.place.meeting_point}</p>
          </div>
      </div>
      <div className="option">
        <i className="material-icons delete-icon" onClick={() => props.deleteActivity(props.data)}>delete</i>
      </div>
    </section>
  );
}