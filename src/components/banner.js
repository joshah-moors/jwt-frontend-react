import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import './banner.css';

const mapStateToProps = state => {
  return { login: state.login, user: state.user };
}

class Banner extends Component {
  constructor(props) {
    super(props);
  //  this.state = {
  //    loggedIn: false,
  //    user: 'Llenora',
  //  }
  }
  render() {
    return (
      <div className="banner">
        <h2 className="banner-logo">JoshahLine Web Solutions</h2>
        <h2 className="banner-text">
        {!this.state.login?
          <Link className="banner-link" to="/login">Login</Link>
        :
          <label>{ this.state.user }</label>
        }
        </h2>
      </div>
    )
  }
}

const BannerTwo = ({ login, user }) => (
  <div className="banner">
    <h2 className="banner-logo">JoshahLine Web Solutions</h2>
    <h2 className="banner-text">
    {!login?
      <Link className="banner-link" to="/login">Login</Link>
    :
      <label>{ user }</label>
    }
    </h2>
  </div>
)

const ConnectedBanner = connect(mapStateToProps)(BannerTwo);

export default ConnectedBanner;