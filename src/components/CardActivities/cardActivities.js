import React from 'react';
import './cardActivities.scss';
import Img from '../../assets/img.js'

export default function CardActivities() {

  const imgs = Img;

  return (
    <section className="card_activities">
      <div className="Activities">
        <img src={imgs.walk} className="sport-img" alt={imgs.walk} />
        <p>Caminhada</p>
      </div>
      <div className="stats">
        <div className="hour_date">
          <p className="clock"><img src={imgs.clock} style={{ paddingRight: "5px" }} alt="" />07:40 - 08:00</p>
          <p><img src={imgs.calendar} style={{ paddingRight: "5px" }} alt="" />23/12/2019</p>
        </div>
        <div className="card_loc">
          <p><img src={imgs.location} style={{ paddingRight: "5px" }} alt="" />Praça Ivo Gomes - Praia da Brisa - Rj</p>
        </div>
      </div>
      <div className="option">
        <img src={imgs.calendar} alt="" />
        <img src={imgs.calendar} alt="" />
      </div>
      <div className="card_mobile">
        <p className="clock"><img src={imgs.clock} style={{ paddingRight: "5px" }} alt="" />07:40 - 08:00</p>
        <p><img src={imgs.calendar} style={{ paddingRight: "5px" }} alt="" />23/12/2019</p>
        <p className="loc"><img src={imgs.location} style={{ paddingRight: "5px" }} alt="" />Praça Ivo Gomes - Praia da Brisa - Rj</p>
      </div>
      <div className="option_mobile">
        <img src={imgs.calendar} alt="" />
        <img src={imgs.calendar} alt="" />
      </div>
    </section>
  );
}