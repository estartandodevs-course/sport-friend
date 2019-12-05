import React from 'react';
import './card.scss';
import activities from '../../data/activities.js'
import users from '../../data/users.js'

export default function Card(props) {

    const activity = activities[0];
    const user = users[0];
    const NewDate = activity;


    return (
        <section className="Container">
            <div className="box">
                <div className="img"></div>
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
                <p className="Local">{activity.place.city}</p>
                <p className="data">{NewDate.date["day"]}/{NewDate.date["month"]}/{NewDate.date["year"]}</p>
                </div>
            </div>
        </section>

    );
}

