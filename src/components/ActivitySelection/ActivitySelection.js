import React, { useState } from "react";
import "./ActivitySelection.scss";
import { sportTypes } from "../../data/sportTypes";
import { useMedia } from "../../hooks/useMedia";

export default function(props) {
  const [allSports] = useState(sportTypes);
  const [selectedSport, setSelectedSport] = useState({});
  var { isSmall } = useMedia();

  const handleSelectedSport = sport => {
    setSelectedSport(sport);
    props.setFilter(sport);
  };

  const isSelected = sport => {
    return selectedSport.id === sport.id;
  };

  return (
    <div className="container-activity">
      {allSports.map((sport, index) => {
        if (isSelected(sport) && isSmall) return null;
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
      {!!selectedSport.id && isSmall && (
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
