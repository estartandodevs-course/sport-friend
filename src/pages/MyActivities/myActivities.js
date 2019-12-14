import React, { useState, useEffect } from "react";
import Header from "../../components/Header/header";
import Modal from "../../components/Modal/modal";
import "./myActivities.scss";
import  Service  from "../../services";
import firebase from "../../services/firebase"
import CardActivities from "../../components/CardActivities/cardActivities";

export default function MyActivities(props) {
  const service = new Service();
  // const [AllActivities, setAllActivities] = useState([]);
  const [myActivities, setMyActivities] = useState([]);
  const currentUid = firebase.getCurrentUserUid();

  const insertActivity = activity => {
    service.insertActivity(activity);
  };

    useEffect(() => {
      // getMyActivities()
      return
    })

    const getMyActivities = () => {
      service.getActivities()
      service.Activities.subscribe( activities => {
        // setAllActivities(activities); 
        console.log(activities)
        const my = activities.filter(item => {return item.author.uid === currentUid});
        if(my !== myActivities){
          setMyActivities(my)
          console.log("é diferente")
        }
      })
  }
  
  const [modal, setModal] = useState(true);
  const toogleModal = () => {
    setModal(!modal);
  };

  return (
    <section className="containerAtividades space-menu">
      <Header />
      {/* <div className="alertAtividade">
        <h2>
          Opss... você não possui <br /> atividades !!!{" "}
        </h2>
        <h2>
          Para adicionar uma atividade <br /> clique no botão abaixo.
        </h2>
      </div> */}
      {myActivities.map(activity => {
        return <CardActivities data={activity}/>
      })}
      <div className="user">
        <i onClick={toogleModal} className="material-icons addCircle">
          add
        </i>
        <h1>Adcionar atividade</h1>
        <Modal
          close={toogleModal}
          action={insertActivity}
          openModal={props.openModal}
          display={modal ? "none" : "flex"}
        />
      </div>
      <link
        href="https://fonts.googleapis.com/icon?family=Material+Icons"
        rel="stylesheet"
      ></link>
    </section>
  );
}
