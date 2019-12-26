import React, { useState, useEffect } from 'react';
import Routers from './Router';
// import Home from './pages/Home/home'
import './App.scss';
import firebase from "./services/firebase";
import Loading from "./components/Loading/Loading";


function App() {

  const [firebaseInitialized, setFirebaseInitialized] = useState(false);

  useEffect(() => {
    firebase.isInitialized().then(val => {
      setFirebaseInitialized(val);
    })
  })

  return firebaseInitialized !== false ? (
    // <Home />
    <Routers/>
  ) : <div id="loader"><Loading /></div>
}

export default App;
