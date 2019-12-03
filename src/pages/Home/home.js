import React from 'react';
// import { Link } from "react-router-dom";
import Header from '../../components/Header/header.js'
import Card from '../../components/Card/card'
import './home.scss';
import firebase from '../../services/firebase'
import ActivitySelection from '../../components/ActivitySelection/ActivitySelection.js';
import Loading from '../../components/Loading/Loading.js';


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
        <h2>O que vamos fazer hoje?</h2>
        {/* <h2>Your quote: {quote ? `"${quote}"`: ""}</h2> */}
        {/* <Link to="/login">Ir para Login</Link> */}
        <ActivitySelection />
        <Card />
        <Loading />
        <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet"></link>
    </main>
  );
}
