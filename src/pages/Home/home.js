import React from 'react';
import { Link } from "react-router-dom";
import './home.scss';

export default function Home() {
  return (
    <div>
        <h1>Hello, Jaja !!</h1>
        <Link to="../Login/login">Ir para Login</Link>
    </div>
  );
}
