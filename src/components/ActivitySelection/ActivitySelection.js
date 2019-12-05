import React, {useState, useEffect } from 'react'
import './ActivitySelection.scss'
import { sportTypes } from '../../data/sportTypes'

export default function ActivitySelection() {
    const [allSports, setAllSports] = useState(sportTypes);
    
    function handleSelectedSport (elementName) {
        console.log(allSports.find(obj => obj.name === elementName))
        while(allSports[4].name !== elementName){
            const arrTurned = turnArray(allSports);
            console.log(arrTurned)
            setAllSports(arrTurned);
        }
    }
    
    useEffect();

    // get the first item and put in the final position and return the new array
    const turnArray = (_arr) => {
        const arr = _arr;
        const firstItem = arr.splice(0, 1);
        arr.push(firstItem[0]);

        return arr;
    }
    
    // setAllSports(allSports);
    
    return (
        <div className="container-activity">
            { allSports.map(sport => {
                return (
                <div key={sport.id} className="sport">
                    <img src={sport.imagem} className="sport-img" alt={sport.name} name={sport.name} key={sport.id} onClick={e => handleSelectedSport(e.target.name) } />
                    <p>{sport.name}</p>
                </div>)
            })}
        </div>
    )
}
