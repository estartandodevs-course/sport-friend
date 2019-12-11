import React, { Component } from "react";
import GoogleMapReact from "google-map-react";
import Marker from "./Marker";
// import Fut from '../../assets/img/football.png'
import "./map.scss";
// import {firebase} from '../../firebase'
export default class Map extends Component {
  state = {
    positions: []
    // isDog: false,
  };

  static defaultProps = {
    center: {
      lat: -22.9993,
      lng: -43.6399
    },
    zoom: 8
  };
  _onclick = ({ lat, lng }) => {
    const _positions = Object.assign([], this.state.positions);
    _positions.push({ lat, lng });
    this.setState({
      positions: _positions
    });
  };

  render() {
    return (
      <main className="map">
        <GoogleMapReact
          onClick={this._onclick}
          bootstrapURLKeys={{ key: "AIzaSyDWBfhtb9khVbng8lfRBWqvLANrxq1YvSs" }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >
          {this.state.positions.map((pos, index) => {
            // return <Marker icon={Fut} key={index} lat={pos.lat} lng={pos.lng} />
            // return <Marker icon={Fut} key={index} lat={pos.lat} lng={pos.lng} />
            // return <Marker icon={Fut} key={index} lat={pos.lat} lng={pos.lng} />
          })}
        </GoogleMapReact>
      </main>
    );
  }
}
