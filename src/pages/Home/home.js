// import React from 'react';
// // import { Link } from "react-router-dom";
// import Header from '../../components/Header/header.js'
// import Card from '../../components/Card/card'
// import './home.scss';
// import firebase from '../../services/firebase'
// // import ActivitySelection from '../../components/ActivitySelection/ActivitySelection.js';
// import ActivitySelection from '../../components/ActivitySelection/ActivitySelectionClass.js';
// import activities from '../../data/activities.js';


// export default function Home(props) {

//   async function filter(params) {

//   }
  
//   if(!firebase.getCurrentUsername()) {
//     // not logged in
//     alert('Please login first')
//     props.history.replace('/login')
//     return null
//   }

//   return (
//     <main className="flex-center">
//         <Header />
//         <h1 className="apresentation-title">
//           {/* Olá {firebase.getCurrentUsername()}! <br></br>  */}
//           Que tal encontrar uma atividade ?</h1>
//         <ActivitySelection filter={filter} />
//         {activities.map(activity => {
//           return <Card activity={activity} />
//         })}
//     </main>
//   );
// }


import React, { Component } from 'react';
import Header from '../../components/Header/header.js'
import Card from '../../components/Card/card'
import './home.scss';
// import firebase from '../../services/firebase'
// import ActivitySelection from '../../components/ActivitySelection/ActivitySelection.js';
import ActivitySelection from '../../components/ActivitySelection/ActivitySelectionClass.js';
import activities from '../../data/activities.js';


export default class Home extends Component {

  allActivities = activities;
  
  state = {
    filterBy: "",
    filteredActitivies: activities
  }


  filter = async (filterBy) => {
    await this.setState({filterBy: filterBy});
    let updatedActivities = this.allActivities.filter(item => item.type === this.state.filterBy);
    await this.setState({filteredActitivies: updatedActivities})
    console.log(this.state.filterBy)
    console.log(this.state.filteredActitivies)
  }

  render() {
    return (
      <main className="flex-center">
        <Header />
        <h1 className="apresentation-title">
          {/* Olá {firebase.getCurrentUsername()}! <br></br>  */}
          Que tal encontrar uma atividade ?</h1>
        <ActivitySelection filter={this.filter} />
        {this.state.filteredActitivies.map(activity => {
          return <Card activity={activity} />
        })}
    </main>
    );
  }
}
