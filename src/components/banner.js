import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './banner.css';

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

export default Banner;