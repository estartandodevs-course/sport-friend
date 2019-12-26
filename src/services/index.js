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
        let resource = Object.keys(response).map(key => {
          return {
            ...response[key],
            key
          }
        });
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

  deleteActivity(key) {
    return (
      firebase
        .database()
        .ref(`Activities/${key}`)
        .remove()
        // .then(() => console.log("Atividade removida com sucesso"))
        // .catch(error => console.error(error))
    );
  }

  updateActivity(activity) {
    return (
      firebase
        .database()
        .ref(`Activities/${activity.key}`)
        .update(activity)
        // .then(() => console.log("Updated"))
    )
  }

  insertUser(user) {
    return (
      firebase
        .database()
        .ref("Users")
        // .child("")
        .push(user)
    );
  }
  
}

export default Service;