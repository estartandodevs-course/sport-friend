import React, { useState } from "react";
import { sportTypes } from "../../data/sportTypes";
import meetingPoints from "../../data/meetingPoint";
import Img from "../../assets/img.js";
import Button from "../Button/button";
import firebase from "../../services/firebase";
import "./modal.scss";
import InputMaskReact from "../InputMask/inputMask";
import ModalAlert from "../ModalAlert/modalAlert";

function Modal(props) {
  let currentUser = firebase.getCurrentUserProfile();
  const uid = firebase.getCurrentUserUid();
  const author = {displayName: currentUser.displayName, uid}
  const [alert, setAlert] = useState({show: false, content: ""})
  
  const [type, setType] = useState("");
  const [description, setDescription] = useState("");
  const [date, setDate] = useState({});
  const [moment, setMoment] = useState({});
  const [place, setPlace] = useState({});

  async function handleMoment (event) {
    await setMoment({
      ...moment,
      [event.target.name]: event.target.value
    })
  }

  async function handleDate (event) {
    const splitedDate = event.target.value.split("-");
    let fullDate = {
      day: splitedDate[2],
      month: splitedDate[1],
      year: splitedDate[0],
    }
    fullDate = {
      ...fullDate,
      date: `${fullDate.day}/${fullDate.month}/${fullDate.year}`
    }
    console.log(fullDate)
    setDate(fullDate)
  }

  async function handleActivityData () {
    // await setDate({day: 5, month: 12, year: 2019, date: "05/12/2019", timestamp: ""})
    const dataActivity = {
      type: type,
      author: author,
      description: description,
      // wip
      // date: {day: 5, month: 12, year: 2019, date: "05/12/2019", timestamp: ""},
      date: date,
      moment: moment,
      place: place
    }
    if(compareHours()){
      console.log(dataActivity)
      props.action(dataActivity)
      setTimeout(props.close, 400)
    } else {
      setAlert({show: true, content:"Hora Inicial não pode ser maior que hora final"})
    }
    // prop.close()
  }

  const compareHours = () => {
    const start_hour = moment.start_hour.split(":");
    const finish_hour = moment.finish_hour.split(":");

    var d = new Date();
    var data1 = new Date(d.getFullYear(), d.getMonth(), d.getDate(), start_hour[0], start_hour[1]);
    var data2 = new Date(d.getFullYear(), d.getMonth(), d.getDate(), finish_hour[0], finish_hour[1]);

    return (data1 < data2);
  }
  

  return (
    <>
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
                <InputMaskReact
                  // className="Input"
                  width="110px"
                  placeholder="Hora Inicial"
                  mask="99:99"
                  name="start_hour"
                  onChange={e => handleMoment(e)}
                  value={props.value}
                />
                <img src={Img.clock} alt="clock"></img>
                <InputMaskReact
                  type="tell"
                  // className="Input"
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
              <input
                type="date"
                className="Input date"
                placeholder="Data"
                mask="99/99/9999"
                // onChange={props.onChange}
                onChange={(e)=> handleDate(e)}
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
              onClick={() => {handleActivityData()}
              }
            >
              Publicar
            </Button>
          </div>
        </div>
      </div>
    </div>
      {alert.show ? (
        <ModalAlert close={() => setAlert(false)}>
          {alert.content}
        </ModalAlert>
      ): null}
    </>
  );
}

export default Modal;

