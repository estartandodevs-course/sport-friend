import React, { Component } from 'react';
import './ActivitySelection.scss'
import { sportTypes } from '../../data/sportTypes'

export default class ActivitySelection extends Component {
    state = {
        allSports: sportTypes,
    }

    handleSelectedSport (elementName) {
        const sports = this.state.allSports;
        const nextSport = sports.find(obj => obj.name === elementName)
        const nextSportIndex = sports.indexOf(nextSport);
        const currentSelected = sports[4];

        sports[nextSportIndex] = currentSelected;
        sports[4] = nextSport;

    }

    render() {
        return (
            <div className="container-activity">
                { this.state.allSports.map(sport => {
                    return (
                    <div key={sport.id} className="sport">
                        <img src={sport.imagem} className="sport-img" alt={sport.name} name={sport.name} key={sport.id} onClick={e => {this.handleSelectedSport(e.target.name); this.props.filter(e.target.name)}} />
                        <p>{sport.name}</p>
                    </div>)
                })}
            </div>
        );
    }
}
