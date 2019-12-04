import React from 'react';
// import { Link } from "react-router-dom";
import Header from '../../components/Header/header.js'
import Card from '../../components/Card/card'
import './home.scss';
import firebase from '../../services/firebase'
import ActivitySelection from '../../components/ActivitySelection/ActivitySelection.js';


export default function Home(props) {

  // const [quote, setQuote] = useState('')
  
  // useEffect(() => {
  //   firebase.getCurrentUserQuote().then(setQuote)
	// })
  
  if(!firebase.getCurrentUsername()) {
    // not logged in
    alert('Please login first')
    props.history.replace('/login')
    return null
  }

  // async function logout() {
	// 	await firebase.logout()
	// 	props.history.push('/')
	// }

  return (
    <main className="flex-center">
        <Header />
        <h1>Olá, {firebase.getCurrentUsername()}</h1>
        <ActivitySelection />
        <Card />
    </main>
  );
}
