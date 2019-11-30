import React from 'react';
import './card.scss';
import { activities } from '../../data/activities.js'

export default function Card() {

    const activity = activities[0];

    console.log(activity)
    return (
        <section className="Container">
            <div className="box">
                <div className="img"></div>
                <p className="User_Name">Daiana</p>
                <p className="data">hoje, 28/11/19</p>
            </div>
            <div className="Time">
                <div className="bar">
                    <p className="start">07:00</p>
                    <p className="end">08:10</p>
                </div>
            </div>
            <div className="Box_info">
                <p className="Local">{activity.place.city}</p>
                <div className="icon"></div>
                <button className="acc">TMJ</button>
            </div>
        </section>
    );
}

