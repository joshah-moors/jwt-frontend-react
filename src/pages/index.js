import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { userLogout } from '../redux/actions';
import './index.css';

import ConnectedBanner from '../components/banner';


const mapStateToProps = state => {
  return { login: state.login, 
           user: state.user };
}

const mapDispathToProps = dispatch => {
  return { userLogout: () => dispatch(userLogout()) };
}


class ConnectedHome extends Component {
  logout() {
    this.props.userLogout();
  }
  render() {
    return (
      <div>
        <ConnectedBanner />
        <div className="section">
          <div className="container">
            <h1 className="title">Home</h1>
            {!this.props.login?
              <ul className="ul">
                <li className="li">
                  <Link to="/login">Login</Link>
                </li>
              </ul>
            :
              <ul className="ul">
                <li className="li">
                  <Link to="/data">Protected Route</Link>
                </li>
                <li className="li">
                  <label 
                    className="li-link" 
                    onClick={() => {this.logout()}}
                  >Logout</label>
                </li>
              </ul>
            }
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


//const Home = connect(mapStateToProps)(ConnectedHome);
const Home = connect(
    mapStateToProps,
    mapDispathToProps)(ConnectedHome);

export default Home;