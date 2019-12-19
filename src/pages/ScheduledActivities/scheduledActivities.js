import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Header from "../../components/Header/header";
import "./scheduledActivities.scss";
import Firebase from "../../services/firebase"
import Service from "../../services/index"
import Card from "../../components/Card/card";

export default function ScheduledActivities() {
  const service = new Service();
  const initialState = {
    allActivities: [],
    scheduledActivities: [],
    currentUserUid: ""
  };
  const [state, setState] = useState(initialState)

  const {
    allActivities,
    scheduledActivities,
    currentUserUid
  } = state

  useEffect(() => {
    const uid = Firebase.getCurrentUserUid();
    service.getActivities()
    service.Activities.subscribe(_activities => {
      setState({
        ...state,
        allActivities: _activities,
        currentUserUid: uid
      })
    })
    handleScheduled()
  }, [allActivities])

  const handleScheduled = () => {
    const scheduleds = scheduledActivities;

    allActivities.forEach(activity => {
      console.log(activity)

      if(activity.matches) {
        //getting each match of array
        activity.matches.forEach(match => {
          if(match.uid == currentUserUid){
            scheduleds.push(activity);
          }
        })
      }
    })

    setState({
      ...state,
      scheduledActivities: scheduleds
    })
    
  }

  return (
    <section className="containerAtividades space-menu">
      <Header className="borderBotton" />
      {/* <div className="alertAtividade">
        <h2>
          Para adicionar uma atividade <br /> clique no botão abaixo.
        </h2>
      </div> */}
      {
        scheduledActivities.map((activity, index) => {
            return (
                <Card
                  key={index}
                  activity={activity}
                  onClick={() => console.log("clicked")}
                />
              );
          })
      }
      <div className="user">
        <Link to="/">
          <i className="material-icons addCircle">add</i>
        </Link>
        <h1>Escolher atividade</h1>
      </div>
    </section>
  );
}
