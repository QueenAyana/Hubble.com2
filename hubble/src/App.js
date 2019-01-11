import React, { Component } from 'react';
import Home from './pages/landing/landing';
import Profile from './pages/profile/profile';
import Survey from './pages/survey/survey';
import { BrowserRouter as Router, Route, Switch, } from "react-router-dom";
import './App.css';

const App = () => {
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/home" component={Home} />
          <Route path="/survey" component={Survey} />
          <Route path="/profile/" component={Home} />
        </Switch>
      </div>
    </Router>
  )
}

export default App;

{/* <Route path="/details/" component={Detail} />
<Route component={NoMatch} /> */}