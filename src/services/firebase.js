import "firebase/auth";
import "firebase/firebase-firestore";
import firebase from "./initFirebase";

class Firebase {
  constructor() {
    this.auth = firebase.auth();
    this.db = firebase.firestore();
  }

  login(email, password) {
    return this.auth.signInWithEmailAndPassword(email, password);
  }

  logout() {
    return this.auth.signOut();
  }

  async register(name, email, password) {
    await this.auth.createUserWithEmailAndPassword(email, password);
    return this.auth.currentUser.updateProfile({
      displayName: name
      // send extra data from user
    });
  }

    async updateUser(data){
        return this.auth.currentUser.updateProfile(data);
    }

    // addQuote(quote) {
    //     if(!this.auth.currentUser) {
    //         return alert("Not authorized")
    //     }

  //     return this.db.doc(`users_codedamn_video/${this.auth.currentUser.uid}`).set({
  //         quote
  //     })
  // }

  isInitialized() {
    return new Promise(resolve => {
      this.auth.onAuthStateChanged(resolve);
    });
  }

  getCurrentUsername() {
    return this.auth.currentUser && this.auth.currentUser.displayName;
  }

  // async getCurrentUserQuote() {
  //     const quote = this.db.doc(`users_codedamn_video/${this.auth.currentUser.uid}`).get()
  //     return quote.get('quote');
  // }
}

export default new Firebase();
