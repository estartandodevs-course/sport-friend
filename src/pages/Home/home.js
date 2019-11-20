import React from 'react';
import { Link } from "react-router-dom";
import './home.scss';

function home() {
  return (
    <>
    <h1 className="home-title"> Página de Home</h1>
    <Link to="../Login/login">Ir para Login</Link>
    </> 
  );
}
export default home;