import React from "react";
import "./card.scss";
import Img from "../../assets/img.js";
import user from "../../assets/img/user.png"

export default function Card(props) {
  const activity = props.activity;
  const date = activity.date;

  return (
    <section className="card_container">
      <div className="user-box">
        <img className="user-img" src={activity.author.photoURL ? activity.author.photoURL : user } alt={activity.author.displayName} />
        <p className="user-name">{activity.author.displayName}</p>
      </div>
      <section className="informations-container">
        <div className="inform-content">
          <img src={Img.clock} alt="clock"/>
          <p>{activity.moment.start_hour} - {activity.moment.finish_hour}</p>
        </div>
        <div className="inform-content">
          <img src={Img.calendar} alt=""/>
          <p>{date["day"]}/{date["month"]}/{date["year"]}</p>
        </div>
        <div className="inform-content">
          <img src={Img.location} alt=""/>
          <p>{activity.place.meeting_point}</p>
        </div>
      </section>
      <div className="open_card">
        <img onClick={props.onClick} src={Img.arrows} alt="" />
      </div>
    </section>
  );
}
