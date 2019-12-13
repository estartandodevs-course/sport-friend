import React, { useState } from "react";
import "./card.scss";
import users from "../../data/users.js";
// import Map from "../../assets/img/maps.png";
import Img from "../../assets/img.js";
// import { sportTypes } from '../../data/sportTypes'

export default function Card(props) {
  // const activity = activities[0];
  const activity = props.activity;
  const date = activity.date;

  let [match, setMatch] = useState(false);
  
  function toogleMatch() {
    setMatch(!match);
  }

  return (
    <section className="card_container" onClick={props.onClick}>
      <div className="box">
        <img className="img" src={activity.author.photoURL} alt={activity.author.displayName} />
        <p className="User_Name">{activity.author.displayName}</p>
      </div>
      <div className="mobile">
        <p className="hour">
          <img
            src={Img.clock}
            alt="clock"
            className="test"
            style={{ paddingRight: "5px", width: "16px" }}
          />
          {activity.moment.start_hour}- {activity.moment.finish_hour}
        </p>

        <p className="data">
          <img src={Img.calendar} alt="" style={{ paddingRight: "5px" }} />
          {date["day"]}/{date["month"]}/{date["year"]}
        </p>

        <p className="Local">
          <img src={Img.location} alt="" style={{ paddingRight: "5px" }} />
          {activity.meeting_point}
        </p>
      </div>
      <div className="open_card">
        <img src={Img.arrows} alt="" />
      </div>
    </section>
  );
}
