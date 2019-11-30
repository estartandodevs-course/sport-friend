import React from 'react';
// import { Link } from "react-router-dom";
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
        <h1>Hello, {firebase.getCurrentUsername()}</h1>
        {/* <h2>Your quote: {quote ? `"${quote}"`: ""}</h2> */}
        <button type="submit" onClick={logout}> Logout </button>
        {/* <Link to="/login">Ir para Login</Link> */}
    </div>
  );
}
