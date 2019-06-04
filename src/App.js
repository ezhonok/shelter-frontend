import React from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom'
import Register from './Registration'
import Login from './Login'

const My404 = () => {
  return (
    <div>
      404 Error
      </div>
    )
}

function App() {
  console.log("process.env:", process.env);
  return (
    <div>
<Login/>

    </div>
  );
}

export default App;
