import React from 'react';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Register from './Registration'
import Login from './Login'
import LogContainer from './LogContainer'
import ReflectionContainer from './ReflectionContainer'

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
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={ Login } />
        <Route exact path="/register" component={ Register } />
        <Route exact path="/logs" component={ LogContainer } />
        <Route exact path="/reflections" component={ ReflectionContainer } />
        <Route component={My404} />
      </Switch>
    </BrowserRouter>
    </div>
  );
}

export default App;
