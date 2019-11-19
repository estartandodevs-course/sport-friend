import React, { useState }  from 'react';
import axios from 'axios';
import URL_API from '../../environment/configSheetDB';


export default function RegisterUser() {

    const [user, setUser] = useState({
        id: 10,
        name: "JAJAJAJ",
        age: 15,
    });

    const handleSubmit = event => {
        event.preventDefault();
        postUser(user);
    }

    const handleChange = event => {
        setUser({ name: event.target.value, id: user.id+1, age: user.age});
    }

    const postUser = (_user) => {
        console.log("pre-posting")
        axios.post(URL_API, {
            "data": _user
        }).then(res => {
            console.log(res);
            console.log(res.data);
        })
    };
  return (
    <div>
        <form onSubmit={handleSubmit}>
          <label>
            Person Name:
            <input type="text" name="name" onChange={handleChange} />
          </label>
          <button type="submit">Add</button>
        </form>
    </div>
  );
}
