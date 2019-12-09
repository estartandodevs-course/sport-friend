import React, { Component } from "react";
import Header from "../../components/Header/header.js";
import Card from "../../components/Card/card";
import ModalActivity from "../../components/ModalActivity/modalActivity";
// import Map from '../../components/Maps/maps.js'
// import Modal from '../../components/Modal/modal.js'
import "./home.scss";
// import firebase from '../../services/firebase'
// import ActivitySelection from '../../components/ActivitySelection/ActivitySelection.js';
import ActivitySelection from "../../components/ActivitySelection/ActivitySelectionClass.js";
import activities from "../../data/activities.js";

export default class Home extends Component {
  allActivities = activities;

  state = {
    filterBy: "",
    filteredActitivies: activities,
    showModal: false,
    cardClicked: ""
  };

  filter = async filterBy => {
    await this.setState({ filterBy: filterBy });
    let updatedActivities = this.allActivities.filter(
      item => item.type === this.state.filterBy
    );
    await this.setState({ filteredActitivies: updatedActivities });
    console.log(this.state.filterBy);
    console.log(this.state.filteredActitivies);
  };

  toggleModal = () => {
    this.setState({
      showModal: !this.state.showModal
    });
  };

  setCardClicked = async i => {
    await this.setState({
      cardClicked: this.state.filteredActitivies[i]
    });
    console.log(this.state.cardClicked);
    this.toggleModal();
  };

  render() {
    return (
      <main className="flex-center">
        <Header />
        <h1 className="apresentation-title">
          {/* Olá {firebase.getCurrentUsername()}! <br></br>  */}
          Que tal encontrar uma atividade ?
        </h1>
        <ActivitySelection filter={this.filter} />
        {this.state.filteredActitivies.map((activity, index) => {
          return (
            <Card
              onClick={() => this.setCardClicked(index)}
              key={index}
              activity={activity}
            />
          );
        })}
        {this.state.showModal ? (
          <ModalActivity
            card={this.state.cardClicked}
            close={this.toggleModal}
          />
        ) : null}
      </main>
    );
  }
}
