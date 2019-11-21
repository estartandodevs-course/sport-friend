import React from 'react';
import React, { Component } from "react";
import ReactDOM from "react-dom";


class Dashboard extends Component {
  state = { show: false };

    showModal = () => {
    this.setState({ show: true });
  };

    hideModal = () => {
    this.setState({ show: false });
  };

  render() {
    return (
      <main>
        <h1>Modal</h1>
        <Modal show={this.state.show} handleClose={this.hideModal}>
          <p>dsddd sd sd sds ds dsds sdsddd ssd</p>
          <p>fdff fd  ff dfdf fd dfdfdfdf df dfdf</p>
        </Modal>
        <button type="button" onClick={this.showModal}>
          Abrir Modal
        </button>
      </main>
    );
  }
}

const container = document.createElement("div");
document.body.appendChild(container);
ReactDOM.render(<Dashboard />, container);


