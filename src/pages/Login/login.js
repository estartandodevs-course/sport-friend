import React, { useState } from "react";
import loginService from "./loginService";
import { Link } from "react-router-dom";

export default function Login() {
    const [newUser, setNewUser] = useState({
        name: "",
        age: ""
    });

    const handleInputChange = (event) => {
        const value = event.target.value;
        const name = event.target.name;
        const inputObj = {
            [name]: value
        }

        setNewUser(Object.assign(newUser, inputObj));

        console.log(newUser);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        loginService.addUser(newUser);
    }

    return (
        <>
            <h1 className="login-title"> Página de login </h1>
            <Link to="/">Ir para Home</Link>
            <form onSubmit={handleSubmit}>
                <label>Name</label>
                <input
                    type="text"
                    name="name"
                    onChange={handleInputChange} />

                <label>Age</label>
                <input
                    type="text"
                    name="age"
                    onChange={handleInputChange} />

                <input
                    type="submit"
                    value="Register User" />

            </form>
        </>
    );
}
