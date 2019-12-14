import React, { useState } from "react";
import { sportTypes } from "../../data/sportTypes";
import meetingPoints from "../../data/meetingPoint";
import Img from "../../assets/img.js";
import Button from "../Button/button";
import InputMask from "react-input-mask";
import firebase from "../../services/firebase";
import "./modal.scss";

function Modal(props) {
  let author = firebase.getCurrentUserProfile()[0];
  const uid = firebase.getCurrentUserUid();
  author = {...author, uid}
  
  const [type, setType] = useState("");
  const [description, setDescription] = useState("");
  // const [date, setDate] = useState();
  const [moment, setMoment] = useState({});
  const [place, setPlace] = useState({});

  async function handleMoment (event) {
    await setMoment({
      ...moment,
      [event.target.name]: event.target.value
    })
    await console.log(moment)
  }

  async function handleActivityData () {
    // await setDate({day: 5, month: 12, year: 2019, date: "05/12/2019", timestamp: ""})
    const dataActivity = {
      type: type,
      author: author,
      description: description,
      // wip
      date: {day: 5, month: 12, year: 2019, date: "05/12/2019", timestamp: ""},
      moment: moment,
      place: place
    }
    console.log(dataActivity)
    props.action(dataActivity)
    // prop.close()
  }
  

  return (
    <div style={{ display: props.display }}>
      <div className="main">
        <div className="modal-container">
          <form>
            <h2 className="descripitionInput">Escolha a atividade:</h2>
            <div className="containerSporte">
              {sportTypes.map((sport, key) => {
                return (
                  <div key={sport.id} className="containerSports">
                    <label className="" forhtml={sport.name}>
                      <img  className="sportImg" src={sport.imagem} alt={sport.name} />
                      <input className="sport-radio" name="sportType" id={sport.name} type="radio" onChange={e => setType(e.target.id)} />
                    </label>
                  </div>
                );
              })}
            </div>

            <h2 className="descripitionInput">Defina o ponto de encontro:</h2>
            <select onChange={(e) => setPlace(meetingPoints[(e.target.value)])} className="formInput">
              <option></option>
              {meetingPoints.map((meetingPoint, key) => {
                return <option key={key} value={key} >{meetingPoint.meeting_point}</option>;
              })}
            </select>

            <div className="containerFormTime">
              <div className="formTime">
                <InputMask
                  className="Input"
                  placeholder="Hora Inicial"
                  mask="99:99"
                  name="start_hour"
                  onChange={e => handleMoment(e)}
                  value={props.value}
                />
                <img src={Img.clock} alt="clock"></img>
                <InputMask
                  type="tell"
                  className="Input"
                  placeholder="Hora Final"
                  mask="99:99"
                  name="finish_hour"
                  onChange={e => handleMoment(e)}
                  value={props.value}
                />
                <img src={Img.clock} alt="clock"></img>
              </div>
            </div>
            <div className="containerFormTime">
              <InputMask
                type="tell"
                className="Input date"
                placeholder="Data"
                mask="99/99/9999"
                onChange={props.onChange}
                value={props.value}
              />
            </div>
            <h2 className="descripitionInput">Descrição</h2>
            <textarea
              className="descriçaoAtividade"
              placeholder="Digite a descrição da sua atividade aqui"
              onChange={e => setDescription(e.target.value)}
            ></textarea>
          </form>
          <div className="btns">
            <Button className="modalBtn" onClick={props.close}>Cancelar</Button>
            <Button
              className="modalBtn btnSecundario"
              onClick={() => handleActivityData() }
            >
              Publicar
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Modal;


// obj base
// const activity = {
//   type: "Futebol",
//   author: {
//     displayName: "Breno",
//     photoURL: "https://avatars3.githubusercontent.com/u/37773859?s=400&v=4",
//     uid: "AipSS8FmIKc8V9Q2ikDMvxEKYbB3"
//   },
//   description: "Futebolzin",
//   date: {
//     day: 5,
//     month: 12,
//     year: 2019,
//     date: "05/12/2019",
//     timestamp: ""
//   },
//   moment: {
//     start_hour: "10:00",
//     finish_hour: "11:00"
//   },
//   place: {
//     city: "Rio de Janeiro",
//     neighborhood: "Guaratiba",
//     meeting_point: "Praça Ivo Gomes - Praia da Brisa",
    
//     coordinates: {
//         latitude: -22.9841311,
//         longitude: -43.6609401,
//     },
//   }
// };