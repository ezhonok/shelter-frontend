import React from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom'
import Register from './Registration'
import Login from './Login'
import CreateLog from './CreateLog'
import LogContainer from './LogContainer'

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
      
    <LogContainer/>

    </div>
  );
}

export default App;
