import Firebase from "./firebase";

class Auth {
  constructor() {
    if (Firebase.getCurrentUsername()) {
      this.authenticated = true;
    } else {
      this.authenticated = false;
    }
  }

  login(cb) {
    this.authenticated = true;
    cb();
  }

  logout(cb) {
    this.authenticated = false;
    cb();
  }

  isAuthenticated() {
    return this.authenticated;
  }
}

export default Auth;
