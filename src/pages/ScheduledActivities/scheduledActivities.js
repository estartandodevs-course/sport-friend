import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Header from "../../components/Header/header";
import "./scheduledActivities.scss";
import Firebase from "../../services/firebase";
import Service from "../../services/index";
import Card from "../../components/Card/card";
import ModalActivity from "../../components/ModalActivity/modalActivity";

export default function ScheduledActivities() {
  const service = new Service();
  const initialState = {
    scheduledActivities: [],
    showModal: false,
    cardClicked: {}
  };
  const [state, setState] = useState(initialState);

  const { scheduledActivities, showModal, cardClicked } = state;

  useEffect(() => {
    const uid = Firebase.getCurrentUserUid();
    service.getActivities();
    service.Activities.subscribe(allActivities => {
      setState({
        ...state,
        scheduledActivities: handleScheduled(allActivities, uid)
      });
    });
  }, []);

  const handleScheduled = (_activities, _uid) => {
    const scheduleds = [];

    _activities.forEach(activity => {
      if (activity.matches) {
        //getting each match of array
        activity.matches.forEach(match => {
          if (match.uid === _uid) {
            scheduleds.push(activity);
          }
        });
      }
    });

    return scheduleds;
  };

  const setCardClicked = async _activity => {
    await setState({
      ...state,
      cardClicked: _activity
    });
    toggleModal();
  };

  const toggleModal = () => {
    setState(prev => ({
      ...prev,
      showModal: !prev.showModal
    }));
  };

  return (
    <section className="containerAtividades space-menu">
      <Header title="Atividades Agendadas" />
      {/* <div className="alertAtividade">
        <h2>
          Para adicionar uma atividade <br /> clique no botão abaixo.
        </h2>
      </div> */}
      {scheduledActivities.map((activity, index) => {
        return (
          <Card
            key={index}
            activity={activity}
            onClick={() => setCardClicked(activity)}
          />
        );
      })}
      <div className="add-activity">
        <Link to="/">
          <i className="material-icons addCircle">add</i>
        </Link>
        <h1>Escolher atividade</h1>
      </div>

      {showModal ? (
        <ModalActivity cancelMatch="true" card={cardClicked} close={toggleModal} />
      ) : null}
    </section>
  );
}
