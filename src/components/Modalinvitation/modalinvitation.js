import React from "react";
import "./modalinvitation.scss";
import Button from "../../components/Button/button";
import Img from "../../assets/img.js";

export default function Modalinvitation(props) {
  return (
    <main className="containerModal">
      <div className="modal">
        <div className="testeBox">
          <section>
            
            <div className="user">
              <img
                src={props.card.author.photoURL}
                alt={props.card.author.displayName}
              />
              <h2>{props.card.author.displayName}</h2>
            </div>
          <div className="Timelocal" >
            <div className="userPerfil">
              <img src={Img.clock} alt=""></img>
              <img src={Img.calendar} alt=""></img>
              <img src={Img.location} alt=""></img>
            </div>
            <div className="Texts">
              <p>
                {props.card.moment.start_hour} - {props.card.moment.finish_hour}
              </p>
              <p>
                {props.card.date.day}/{props.card.date.month}/
                {props.card.date.year}
              </p>
              <p>{props.card.meeting_point}</p>
            </div>
          </div>
          </section>
          <div className="description">
            <h2>{props.card.description}</h2>
          </div>
          <div className="btts">
          <Button
            active={props.onClick}
            onClick={props.close}
            className="btncancelar ">
            Recusar
          </Button>
          <Button
            active={props.onClick}
            className="btnTeste ">
            Confirmar 
          </Button>
          </div>
        </div>
      </div>
    </main>
  );
}
