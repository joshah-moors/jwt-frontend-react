import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import ConnectedBanner from '../components/banner';


const mapStateToProps = state => {
  return { login: state.login, 
           user: state.user };
}

class ConnectedProtectedPage extends Component {
  render() {
    if (!this.props.login) {
      return (
        <Redirect to='/login' />
      )
    } else {
      return (
        <div>
          <ConnectedBanner />
          <div className="section">
            <div className="container">
              <h1 class="title">Protected Route</h1>
              <br />
              <Link to="/">Return to Home</Link>
              <br /><br />
              <ul>
                <li>Data Item 1</li>
                <li>Data Item 2</li>
                <li>Data Item 3</li>
              </ul>
            </div>
          </div>
        </div>
      )
    }
  }
}

const ProtectedPage = connect(mapStateToProps)(ConnectedProtectedPage);

export default ProtectedPage;