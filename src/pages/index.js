import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './index.css';


class Banner extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loggedIn: false,
      user: 'Llenora',
    }
  }
  render() {
    return (
      <div className="banner">
        <h2 className="banner-logo">JoshahLine Web Solutions</h2>
        <h2 className="banner-text">
        {!this.state.loggedIn?
          <Link className="banner-link" to="/login">Login</Link>
        :
          <label>{ this.state.user }</label>
        }
        </h2>
      </div>
    )
  }
}


class Home extends Component {
  render() {
    return (
      <div>
        <Banner />
        <div className="section">
          <div className="container">
            <h1 className="title">Home</h1>
            <ul className="ul">
              <li className="li">
                <Link to="/login">Login</Link>
              </li>
              <li>-</li>
              <li className="li">
                <Link to="/data">Protected Route</Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="section">
          <div className="container">
            <p>
              Descriptive text about this site goes here..
            </p>
          </div>
        </div>
        <div className="index-footer">
          Visit the old version that uses local storage: <Link to="/localhost_login">LocalStorage Login</Link>
        </div>
      </div>
    )
  }
}


export default Home;