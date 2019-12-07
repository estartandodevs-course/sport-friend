import React from 'react';

export default function Marker(props) {

    const greatPlaceStyle = {
    width:30,
    height:30,
    backgroundImage: "url("+ props.icon +")",
    backgroundRepeat: 'no-repeat',
    backgroundSize: "cover",
      }

    return (
        <div style={greatPlaceStyle}>
          
        </div>
      );
}