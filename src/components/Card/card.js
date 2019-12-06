import React from 'react';
import './card.scss';
// import activities from '../../data/activities.js'
import users from '../../data/users.js'

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
                    
                </div>
                <div className="stats">
                <p className="User_Name">{activity.type}</p>
                <p className="Local">{activity.place}</p>
                <p className="data">{date["day"]}/{date["month"]}/{date["year"]}</p>
                </div>
            </div>
        </section>

    );
}

