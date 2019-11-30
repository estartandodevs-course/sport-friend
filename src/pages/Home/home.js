import React from 'react';
// import { Link } from "react-router-dom";
import Header from '../../components/Header/header.js'
import Card from '../../components/Card/card'
import './home.scss';
import firebase from '../../services/firebase'


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

  async function logout() {
		await firebase.logout()
		props.history.push('/')
	}

  return (
    <div className="flex-center">
        <Header />
        <h1>Hello, {firebase.getCurrentUsername()}</h1>
        {/* <h2>Your quote: {quote ? `"${quote}"`: ""}</h2> */}
        {/* <Link to="/login">Ir para Login</Link> */}
        <Activityselection />
        <Card />
        <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet"></link>
    </div>
  );
}
