import React, { Component } from 'react';
import { Link } from 'react-router-dom';


class Home extends Component {
  render() {
    return (
      <div>
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
        <div className="section">
          <div className="container">
            <br /><br /><br /><br /><br /><br />
            <label>
              Visit the old version that uses local storage: <Link to="/localhost_login">LocalStorage Login</Link>
            </label>
          </div>
        </div>
      </div>
    )
  }
}


export default Home;