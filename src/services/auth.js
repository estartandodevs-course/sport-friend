import Firebase from "./firebase";

class Auth {
  constructor() {
    if(Firebase.getCurrentUsername()){
      this.authenticated = true
    } else {
      this.authenticated = false;
    }
  }

  isAuthenticated() {
    return this.authenticated;
  }
}

export default new Auth();