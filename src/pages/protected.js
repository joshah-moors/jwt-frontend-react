import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import ConnectedBanner from '../components/banner';

class ProtectedPage extends Component {
  render() {
    return (
      <div>
        <ConnectedBanner />
        <div className="section">
          <div className="container">
            <h1>Protected Route</h1>
            <ul>
              <li>Data Item 1</li>
              <li>Data Item 2</li>
              <li>Data Item 3</li>
            </ul>
            <br /><br />
            <Link to="/">Return to Home</Link>
          </div>
        </div>
      </div>
    )
  }
}

export default ProtectedPage;