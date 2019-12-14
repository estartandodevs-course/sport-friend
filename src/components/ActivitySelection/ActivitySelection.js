import React, { useState } from "react";
import "./ActivitySelection.scss";
import { sportTypes } from "../../data/sportTypes";
import { useMedia } from "../../hooks/useMedia";

export default function(props) {
  const [allSports, setAllSports] = useState(sportTypes);

  var { isSmall } = useMedia();

  const handleSelectedSport = e => {
    const elementName = e.target.name;
    const sports = allSports;
    const nextSport = sports.find(obj => obj.name === elementName);
    const nextSportIndex = sports.indexOf(nextSport);
    
    if(isSmall) {
      const currentSelected = sports[4];
      sports[nextSportIndex] = currentSelected;
      sports[4] = nextSport;
    }

    setAllSports(sports);
  };


  return (
    <div className="container-activity">
      {allSports.map(sport => {
        return (
          <label forhtml={sport.name} key={sport.id} className="sport">
            <input className="input-radio" name="sportsType" id={sport.name} type="radio" />
            <img 
              src={sport.imagem}
              alt={sport.name}
              name={sport.name}
              className="sport-img"
              key={sport.id}
              onClick={e => {
                handleSelectedSport(e);
                props.filter(e.target.name);
              }}
            />
            <p>{sport.name}</p>
          </label>
        );
      })}
    </div>
  );
}
