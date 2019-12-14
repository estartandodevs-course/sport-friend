import React from "react";
import "./card.scss";
import Img from "../../assets/img.js";
import user from "../../assets/img/user.png"

export default function Card(props) {
  const activity = props.activity;
  const date = activity.date;

  // let [match, setMatch] = useState(false);
  
  // function toogleMatch() {
  //   setMatch(!match);
  // }

  return (
    <section className="card_container" onClick={props.onClick}>
      <div className="box">
        <img className="img" src={activity.author.photoURL ? activity.author.photoURL : user } alt={activity.author.displayName} />
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
          {activity.place.meeting_point}
        </p>
      </div>
      <div className="open_card">
        <img src={Img.arrows} alt="" />
      </div>
    </section>
  );
}
