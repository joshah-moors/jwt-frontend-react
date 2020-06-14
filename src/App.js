import React, { Component } from 'react';
import 'bulma/css/bulma.css';
import './App.css';

// Axios base instance
//import API from './components/api';

// npm install react-router-dom --save
//import { BrowserRouter as Router, Route, Switch, Link, Redirect } from 'react-router-dom';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';

// For working through redux this blog is helpful: https://www.valentinog.com/blog/redux/
// Did these before updating index.js:
//   npm install react-redux --save
//   npm install redex --save

// Router Pages
import Home from './pages';
import LoginPage from './pages/login';
import ProtectedPage from './pages/protected';
import LocalStoreLogin from './pages/localStoreLogin';
import NotFoundPage from './pages/404';



class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/login" component={LoginPage} />
          <Route exact path="/data" component={ProtectedPage} />
          <Route exact path="/localhost_login" component={LocalStoreLogin} />
          <Route exact path="/404" component={NotFoundPage} />
          <Redirect to="/404" />
        </Switch>
      </Router>
    )
  }
}

export default App;