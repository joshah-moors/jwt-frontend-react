import React, { Component } from 'react';
import 'bulma/css/bulma.css';
import './App.css';

// Axios base instance
import API from './components/api';
import LocalhostLogin from './components/localhostLogin';

// npm install react-router-dom --save
import { BrowserRouter as Router, Route, Switch, Link, Redirect } from 'react-router-dom';

import Home from './pages';
import LoginPage from './pages/login';
import ProtectedPage from './pages/protected';



class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/login" component={LoginPage} />
          <Route exact path="/data" component={ProtectedPage} />
          <Route exact path="/localhost_login" component={LocalhostLogin} />
        </Switch>
      </Router>
    )
  }
}

export default App;