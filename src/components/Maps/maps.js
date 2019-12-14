import React, { Component } from "react";
import GoogleMapReact from "google-map-react";
import Marker from "./Marker";
import markerIcon from '../../assets/img/marker.png'
import "./map.scss";
export default class Map extends Component {
  state = {
    positions: []
  };

  center = {
    lat: this.props.cord.latitude,
    lng: this.props.cord.longitude
  }

  // static defaultProps = {
  //   center: {
  //     lat: -22.9993,
  //     lng: -43.6399
  //   },
  //   zoom: 12
  // };

  render() {
    console.log(this.props.cord)
    return (
      <main className="map">
        <GoogleMapReact
          onClick={this._onclick}
          bootstrapURLKeys={{ key: "AIzaSyDWBfhtb9khVbng8lfRBWqvLANrxq1YvSs" }}
          defaultCenter={this.center}
          defaultZoom={13}
        >
          <Marker icon={markerIcon} lat={this.props.cord.latitude} lng={this.props.cord.longitude} />
        </GoogleMapReact>
      </main>
    );
  }
}
