import React from 'react';
import { Header } from 'semantic-ui-react';

import { Link } from 'react-router-dom';


const HeaderApp = () => {
  return (
    <Header>
      <ul>
        <Link className="Link" to="/">Sign out</Link>
        <Link className="Link1" to="/feel-better">Not feeling great?</Link>
        <Link className="Link2" to="/techniques">My "Feel Better" techniques</Link>
        <Link className="Link3" to="/logs">Create a new log</Link>
        <Link className="Link4" to="/reflections">Reflect and Analyze</Link>
        <Link className="Link5" to="/home">Home</Link>
      </ul>
    </Header>
    )
}

export default HeaderApp;
