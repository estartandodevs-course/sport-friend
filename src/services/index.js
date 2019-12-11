import { BehaviorSubject } from "rxjs";
import firebase from "./initFirebase";

class Service {
  Activities = new BehaviorSubject([]);
  Cats = new BehaviorSubject([]);

  constructor() {
    this.getActivities();
  }

  getActivities = () => {
    firebase
      .database()
      .ref("Activities")
      .on("value", snapshot => {
        let response = snapshot.val();
        if (!response) return;
        let resource = Object.keys(response).map(key => response[key]);
        this.Activities.next(resource);
      });
  };

  insertActivity(activity) {
    return (
      firebase
        .database()
        .ref("Activities")
        // .child("")
        .push(activity)
    );
  }
}

export default Service;