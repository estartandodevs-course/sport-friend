import React, { useState } from "react";
import "./ActivitySelection.scss";
import { sportTypes } from "../../data/sportTypes";
import { useMedia } from "../../hooks/useMedia";

export default function(props) {
  const [allSports, setAllSports] = useState(sportTypes);
  const [selectedSport, setSelectedSport] = useState({});
  var { isSmall } = useMedia();

  // const handleSelectedSport = e => {
  //   const elementName = e.target.name;
  //   const sports = allSports;
  //   const nextSport = sports.find(obj => obj.name === elementName);
  //   const nextSportIndex = sports.indexOf(nextSport);

  //   if (isSmall) {
  //     const currentSelected = sports[4];
  //     sports[nextSportIndex] = currentSelected;
  //     sports[4] = nextSport;
  //   }

  //   setAllSports(sports);
  // };

  const handleSelectedSport = sport => {
    setSelectedSport(sport);
  };

  const isSelected = sport => {
    // console.log(selectedSport.id === sport.id);
    return selectedSport.id === sport.id;
  };

  return (
    <div className="container-activity">
      {allSports.map(sport => {
        if (isSelected(sport)) return null;
        return (
          <label forhtml={sport.name} key={sport.id} className="sport">
            <input
              className="input-radio"
              name="sportsType"
              id={sport.name}
              type="radio"
            />
            <img
              src={isSelected(sport) ? sport.activeImg : sport.imagem}
              alt={sport.name}
              name={sport.name}
              className={`sport-img ${isSelected(sport) ? "active" : ""}`}
              key={sport.id}
              onClick={() => handleSelectedSport(sport)}
            />
            <p>{sport.name}</p>
          </label>
        );
      })}
      {!!selectedSport.id && (
        <label
          forhtml={selectedSport.name}
          key={selectedSport.id}
          className="sport"
        >
          <input
            className="input-radio"
            name="sportsType"
            id={selectedSport.name}
            type="radio"
          />
          <img
            src={
              isSelected(selectedSport)
                ? selectedSport.activeImg
                : selectedSport.imagem
            }
            alt={selectedSport.name}
            name={selectedSport.name}
            className={`sport-img ${isSelected(selectedSport) ? "active" : ""}`}
            key={selectedSport.id}
            onClick={() => handleSelectedSport(selectedSport)}
          />
          <p>{selectedSport.name}</p>
        </label>
      )}
    </div>
  );
}
