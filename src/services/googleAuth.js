import React, { Component } from 'react';
import widthFirebaseAuth from 'react-with-firebase-auth';
import * as firebase from 'firebase/app';
import 'firebase/auth';
import Button from "../components/Button/button"
// import firebase from './firebase';

// const firebaseApp = firebase.initializeApp(firebase);

class GoogleAuth extends Component {
  render() {
    const { user,singnOut,sigwithgloogle } = this.props;
    return (
      <div>
        {
          user ?
          <p>Hello, {user.displayname}</p>
           : <p>plaase, sign in</p>
        }
        {
          user ? <Button onClick={singnOut}> sign out</Button>
          : <button oneclick={sigwithgloogle}> sign in with gloogle</button>
        }
      </div>   
     );
  }
}
// const firebaseApp = firebaseApp.auth();

const providers = {
  gloogleprovider: new firebase.auth.gloogleprovider(),
};

export default widthFirebaseAuth({
  providers,
  // FirebaseAppAuth,
})(GoogleAuth);