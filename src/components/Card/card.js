import React, { useState } from "react";
import "./card.scss";
// import activities from '../../data/activities.js'
<<<<<<< HEAD
import users from '../../data/users.js'
import Map from '../../assets/img/maps.png'
import Img from '../../assets/img.js'



=======
import users from "../../data/users.js";
import Map from "../../assets/img/maps.png";
>>>>>>> develop
export default function Card(props) {
  // const activity = activities[0];
  const activity = props.activity;
  const user = users[0];
  // const [user, setUser] = useState("");
  const date = activity.date;

  //    function getUser () {
  //         const currentUserId = activity.author_id
  //         const author = users.find(user => user.id === currentUserId)
  //         setUser(author.first_name);
  //     }

<<<<<<< HEAD
    // const activity = activities[0];
    const activity = props.activity;
    const user = users[0];
    const imgs = Img;
    // const [user, setUser] = useState("");
    const date = activity.date;
=======
  const [match, setMatch] = useState(false);
>>>>>>> develop

  //    function getUser () {
  //         const currentUserId = activity.author_id
  //         const author = users.find(user => user.id === currentUserId)
  //         setUser(author.first_name);
  //     }

  function toogleMatch() {
    setMatch(!match);
    alert("foi");
  }

    let [match, setMatch] = useState(false)


    //    function getUser () {
    //         const currentUserId = activity.author_id
    //         const author = users.find(user => user.id === currentUserId)
    //         setUser(author.first_name);
    //     }

    function toogleMatch() {
        setMatch(!match)
    }

    return (

        <section className="Container">
            <div className="box">
                <img className="img" src={user.avatar} alt={user.first_name} />
                <p className="User_Name">{user.first_name}</p>
            </div>
            <div className="Time">
                <div className="bar">
                    <p className="start"><i className="material-icons icon_start">alarm</i>{activity.moment.start_hour}</p>
                    <p className="start"><i className="material-icons icon_start">alarm</i>{activity.moment.finish_hour}</p>
                </div>
            </div>
            <div className="Box_info">
                <div className="cheked">
                    <i className="material-icons icon_start" id="img" onClick={toogleMatch}>{match ? "check_box" : "check_box_outline_blank"}</i>
                </div>
                <div className="stats">
                    <p className="Local">{activity.place}</p>
                    <div className="lacalization">
                        <p className="data">{date["day"]}/{date["month"]}/{date["year"]}</p>
                        <img src={Map} alt=""></img>
                    </div>
                    
                </div>
            </div>

            <div className="mobile">

                <p className="hour">
                    <img src={imgs.clock} alt="clock" className="test" style={{ paddingRight: "5px" }} />
                    {activity.moment.start_hour}-                 {activity.moment.finish_hour}
                </p>

                <p className="data">
                    <img src={imgs.calendar} alt="" style={{ paddingRight: "5px" }} />{date["day"]}/
                {date["month"]}/
                {date["year"]}
                </p>

                <p className="Local">
                    <img src={imgs.location} alt="" style={{ paddingRight: "5px" }} />{activity.place}
                </p>

            </div>
        </section>
        
    );
}
