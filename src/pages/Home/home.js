import React, { useState, useEffect } from "react";
import Header from "../../components/Header/header.js";
import Card from "../../components/Card/card";
import ModalActivity from "../../components/ModalActivity/modalActivity";
import "./home.scss";
import Service from "../../services/index";
import Firebase from "../../services/firebase";
import ActivitySelection from "../../components/ActivitySelection/ActivitySelection.js";
import Loading from "../../components/Loading/Loading";

export default function Home() {
  const service = new Service();
  const initialState = {
    filteredActitivies: [],
    showModal: false,
    showCards: true,
    cardClicked: {},
    sport: false,
    allActivities: [],
    currentUserUid: ""
  };
  const [state, setState] = useState(initialState);

  const {
    showModal,
    showCards,
    cardClicked,
    sport,
    allActivities,
    currentUserUid
  } = state;

  useEffect(() => {
    const uid = Firebase.getCurrentUserUid();
    service.getActivities();
    service.Activities.subscribe(_activities => {
      setState({
        ...state,
        allActivities: _activities,
        currentUserUid: uid
      });
    });
    setTimeout(() => {
      setState(prev => ({ ...prev, showCards: true }));
    }, 1500);
  }, []);

  const toggleModal = () => {
    setState(prev => ({
      ...prev,
      showModal: !prev.showModal
    }));
  };

  const setCardClicked = async _activity => {
    await setState({
      ...state,
      cardClicked: _activity
    });
    toggleModal();
  };

  const setFilter = sport => {
    setState({ ...state, sport });
  };

  console.log("SUBSCRIBE ::: ", state);

  return (
    <main className="flex-center space-menu">
      <Header />
      <h1 className="apresentation-title">
        {/* Olá {firebase.getCurrentUsername()}! <br></br>  */}
        Que tal encontrar uma atividade ?
      </h1>
      <ActivitySelection setFilter={setFilter} />

      {showCards ? (
        allActivities
          .filter(activity => {
            return (
              activity.author.uid !== currentUserUid &&
              (!sport || sport.name === activity.type)
            );
          })
          .map((activity, index) => {
            return (
              <Card
                onClick={() => setCardClicked(activity)}
                key={index}
                activity={activity}
              />
            );
          })
      ) : (
        <Loading />
      )}

      {showModal ? (
        <ModalActivity card={cardClicked} close={toggleModal} />
      ) : null}
    </main>
  );
}
