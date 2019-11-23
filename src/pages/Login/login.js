import React from 'react';
import { Link } from "react-router-dom";

function login() {
  return (
    <>
    <h1 className="login-title"> Página de login </h1>
    <Link to="/">Ir para Home</Link> 
    </>  
  );
}
export default login;