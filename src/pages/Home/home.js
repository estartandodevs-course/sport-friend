import React from 'react';
import Header from '../../components/Header/header.js'
import Activityselection from '../../components/ActivitySelection/ActivitySelection.js'
import './home.scss';

export default function Home() {
  return (
    <div>
        <Header />
        <div className="Test"></div>
        <Activityselection />
        <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet"></link>
    </div>
  );
}
