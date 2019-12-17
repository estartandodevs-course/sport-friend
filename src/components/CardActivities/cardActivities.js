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
    "Caminhada": Img.walkActive
  }

  return (
    <section className="card_activities">
      <div className="Activities">
        <img src={imagens[`${props.data.type}`]} className="sport-img" alt="atividade" />
        <p>{props.data.type}</p>
      </div>
      <div className="stats">
        <div className="hour_date">
          <p className="clock"><img src={Img.clock} style={{ paddingRight: "5px" }} alt="" />{props.data.moment.start_hour} - {props.data.moment.finish_hour}</p>
          <p><img src={Img.calendar} style={{ paddingRight: "5px" }} alt="" />{props.data.date.data}</p>
        </div>
        <div className="card_loc">
          <p><img src={Img.location} style={{ paddingRight: "5px" }} alt="" />{props.data.place.meeting_point}</p>
        </div>
      </div>
      <div className="option">
        {/* <img src={Img.calendar} alt="" /> */}
        <img src={Img.calendar} alt="" />
        <i className="material-icons delete-icon" onClick={() => props.deleteActivity(props.data)}>delete</i>
      </div>
      <div className="card_mobile">
        <p className="clock"><img src={Img.clock} style={{ paddingRight: "5px" }} alt="" />07:40 - 08:00</p>
        <p><img src={Img.calendar} style={{ paddingRight: "5px" }} alt="" />23/12/2019</p>
        <p className="loc"><img src={Img.location} style={{ paddingRight: "5px" }} alt="" />Praça Ivo Gomes - Praia da Brisa - Rj</p>
      </div>
      <div className="option_mobile">
        <img src={Img.calendar} alt="" />
        <i className="material-icons delete-icon" onClick={() => props.deleteActivity(props.data)}>delete</i>
      </div>
    </section>
  );
}