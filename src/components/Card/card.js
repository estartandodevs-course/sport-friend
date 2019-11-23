import React from 'react';
import './card.scss';
import { activities } from '../../data/activities.js'

export default function Card(props) {

    const activity = activities[0];

    console.log(activity)
    return (
        <section className="Container">
            <div className="box">
                <div className="Box_User">
                    {/* <img src={} alt=""></img> */}
                    <p className="User_Name"></p>
                </div>
                <div className="Time"></div>
            </div>
            <div className="Box_info">
                <p className="Local">{activity.place.city}</p>
            </div>
        </section>
    );
}

