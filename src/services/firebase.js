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

  async register(form) {
    await this.auth.createUserWithEmailAndPassword(form.email, form.password);
    await this.auth.currentUser.updateProfile({
      displayName: form.name,
      email: form.email,
      // photoURL: 
    });
  }

    async updateUser(data){
        return this.auth.currentUser.updateProfile(data);
    }

  isInitialized() {
    return new Promise(resolve => {
      this.auth.onAuthStateChanged(resolve);
    });
  }

  getCurrentUsername() {
    return this.auth.currentUser && this.auth.currentUser.displayName;
  }

  getCurrentUserProfile(){
    return this.auth.currentUser.providerData;
  }

  getCurrentUserUid(){
    return this.auth.currentUser.uid;
  }

}

export default new Firebase();
