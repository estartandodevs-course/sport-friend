import React from "react";
import "./card.scss";
import Img from "../../assets/img.js";

export default function Card(props) {
  const activity = props.activity;
  const date = activity.date;

  // let [match, setMatch] = useState(false);
  
  // function toogleMatch() {
  //   setMatch(!match);
  // }

<<<<<<< HEAD
    // const activity = activities[0];
    const activity = props.activity;
    const user = users[0];
    // const [user, setUser] = useState("");
    const date = activity.date;

=======
  return (
    <section className="card_container" onClick={props.onClick}>
      <div className="box">
        <img className="img" src={activity.author.photoURL} alt={activity.author.displayName} />
        <p className="User_Name">{activity.author.displayName}</p>
      </div>
>>>>>>> develop
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

    //    function getUser () {
    //         const currentUserId = activity.author_id
    //         const author = users.find(user => user.id === currentUserId)
    //         setUser(author.first_name);
    //     }

    const [match, setMatch] = useState(false)


    //    function getUser () {
    //         const currentUserId = activity.author_id
    //         const author = users.find(user => user.id === currentUserId)
    //         setUser(author.first_name);
    //     }
    
    function toogleMatch() {
        setMatch(!match)
        alert("foi")
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
                    <i className="material-icons icon_start" onClick={toogleMatch}></i>
                </div>
                <div className="stats">
                    <p className="User_Name">{activity.type}</p>
                    <p className="Local">{activity.place}</p>
                    <div className="lacalization">
                        <p className="data">{date["day"]}/{date["month"]}/{date["year"]}</p>
                        <img src={Map} alt=""></img>
                    </div>
                    {/* <p className="data">{date["day"]}/{date["month"]}/{date["year"]}</p> */}
                </div>
            </div>
        </section>

    );
}
