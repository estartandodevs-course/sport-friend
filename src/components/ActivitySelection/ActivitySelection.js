import React, { useState } from 'react';
import './ActivitySelection.scss'
import { sportTypes } from '../../data/sportTypes'

export default function (props) {

    const [allSports, setAllSports] = useState(sportTypes);

    const handleSelectedSport = (elementName) => {
        const sports = allSports;
        const nextSport = sports.find(obj => obj.name === elementName)
        const nextSportIndex = sports.indexOf(nextSport);
        const currentSelected = sports[4];

        sports[nextSportIndex] = currentSelected;
        sports[4] = nextSport;

        setAllSports(sports);
    };

        return (
            <div className="container-activity">
                { allSports.map(sport => {
                    return (
                    <div key={sport.id} className="sport">
                        <img src={sport.imagem} className="sport-img" alt={sport.name} name={sport.name} key={sport.id} onClick={e => {handleSelectedSport(e.target.name); props.filter(e.target.name)}} />
                        <p>{sport.name}</p>
                    </div>)
                })}
            </div>
        );
}
