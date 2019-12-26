import * as firebase from "firebase/app";
import "firebase/database";
import "firebase/auth";
import "firebase/storage";
import environment from "../environment";

firebase.initializeApp(environment.firebaseConfig);
export default firebase;
