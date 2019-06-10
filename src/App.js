import React from 'react';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Register from './Registration'
import Login from './Login'
import LogContainer from './LogContainer'
import ReflectionContainer from './ReflectionContainer'
import TechniquesContainer from './TechniquesContainer'
import FeelBetterContainer from './FeelBetterContainer'
import NightContainer from './NightContainer'
import Home from './HomeContainer'

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
        <Route exact path="/home" component={ Home } />
        <Route exact path="/register" component={ Register } />
        <Route exact path="/logs" component={ LogContainer } />
        <Route exact path="/reflections" component={ ReflectionContainer } />
        <Route exact path="/techniques" component={ TechniquesContainer } />
        <Route exact path="/feel-better" component={ FeelBetterContainer } />
        <Route exact path="/night" component={ NightContainer } />
        <Route component={My404} />
      </Switch>
    </BrowserRouter>
    </div>
  );
}

export default App;
