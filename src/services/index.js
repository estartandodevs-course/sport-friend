import { BehaviorSubject } from "rxjs";
import { firebase } from "../../firebase";

export class Service {
  Activities = new BehaviorSubject([]);
  Cats = new BehaviorSubject([]);

  constructor() {
    this.getActivities();
  }

  getActivities = () => {
    firebase
      .database()
      .ref("activities")
      .on("value", snapshot => {
        let response = snapshot.val();
        let resource = Object.keys(response).map(key => response[key]);
        this.Activities.next(resource);
      });
  };

  insertActivity(activity) {
    return firebase
      .database()
      .ref("activities")
      .child("")
      .push(activity);
  }
}
