import React, { Component } from "react";
import Header from "../../components/Header/header.js";
import Card from "../../components/Card/card";
import ModalActivity from "../../components/ModalActivity/modalActivity";
import "./home.scss";
import Service from "../../services/index";
import ActivitySelection from "../../components/ActivitySelection/ActivitySelection.js";
import Loading from "../../components/Loading/Loading";

export default class Home extends Component {
  service = new Service();
  AllActivities = false;

  state = {
    filterBy: "",
    filteredActitivies: [],
    showModal: false,
    showCards: false,
    cardClicked: ""
  };

  componentDidMount() {
    this.service.getActivities();
    this.service.Activities.subscribe(activities => {
      this.AllActivities = activities;
      this.setState({ filteredActitivies: activities });
    });
    setTimeout(() => {
      this.setState({ showCards: true });
    }, 1500);
  }

  filter = async filterBy => {
    await this.setState({ filterBy: filterBy });
    let updatedActivities = this.AllActivities.filter(
      item => item.type === this.state.filterBy
    );
    await this.setState({ filteredActitivies: updatedActivities });
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

  setFilter = sport => {
    this.setState({ ...this.state });
  };
  render() {
    const { filteredActitivies } = this.state;

    return (
      <main className="flex-center space-menu">
        <Header />
        <h1 className="apresentation-title">
          {/* Olá {firebase.getCurrentUsername()}! <br></br>  */}
          Que tal encontrar uma atividade ?
        </h1>
        <ActivitySelection filter={this.filter} setFilter={this.setFilter} />

        {this.state.showCards ? (
          filteredActitivies.map((activity, index) => {
            return (
              <Card
                onClick={() => this.setCardClicked(index)}
                key={index}
                activity={activity}
              />
            );
          })
        ) : (
          // Loading isn't working =/
          <Loading />
        )}

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
