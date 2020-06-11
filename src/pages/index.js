import React, { Component } from 'react';


class Home extends Component {
  render() {
    return (
      <div>
        <div className="section">
          <div className="container">
            <h1 className="title">Home</h1>
            <ul className="ul">
              <li className="li">
                <a href="#">Login</a>
              </li>
              <li>-</li>
              <li className="li">
                <a href="#">Protected Route</a>
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
      </div>
    )
  }
}


export default Home;