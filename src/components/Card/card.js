import React, { useState } from "react";
import "./card.scss";
import users from "../../data/users.js";
import Clock from "../../assets/img/alarm-clock.png";
import Calendario from "../../assets/img/Calendario.svg";
import Local from "../../assets/img/Local.svg";
import Map from "../../assets/img/maps.png";
import Img from "../../assets/img.js";

export default function Card(props) {
  // const activity = activities[0];
  const activity = props.activity;
  const user = users[0];
  const imgs = Img;
  // const [user, setUser] = useState("");
  const date = activity.date;

  let [match, setMatch] = useState(false);
  function toogleMatch() {
    setMatch(!match);
  }

  return (
    <section
      className="card_container"
      onClick={props.onClick}
    >
      <div className="box">
        <img className="img" src={user.avatar} alt={user.first_name} />
        <p className="User_Name">{user.first_name}</p>
      </div>
      <div className="Time">
        <div className="bar">
          <p className="start">
            <i className="material-icons icon_start">alarm</i>
            {activity.moment.start_hour}
          </p>
          <p className="start">
            <i className="material-icons icon_start">alarm</i>
            {activity.moment.finish_hour}
          </p>
        </div>
      </div>
      <div className="Box_info">
        <div className="cheked">
          <i
            className="material-icons icon_start"
            id="img"
            onClick={toogleMatch}
          >
            {match ? "check_box" : "check_box_outline_blank"}
          </i>
        </div>
        <div className="stats">
          <p className="Local">{activity.place}</p>
          <div className="lacalization">
            <p className="data">
              {date["day"]}/{date["month"]}/{date["year"]}
            </p>
            <img src={Map} alt=""></img>
          </div>
        </div>
      </div>

      <div className="mobile">
        <p className="hour">
          <img
            src={Clock}
            alt="clock"
            className="test"
            style={{ paddingRight: "5px", width: "16px" }}
          />
          {activity.moment.start_hour}- {activity.moment.finish_hour}
        </p>

        <p className="data">
          <img src={Calendario} alt="" style={{ paddingRight: "5px" }} />
          {date["day"]}/{date["month"]}/{date["year"]}
        </p>

        <p className="Local">
          <img src={Local} alt="" style={{ paddingRight: "5px" }} />
          {activity.place}
        </p>
      </div>
    </section>
  );
}