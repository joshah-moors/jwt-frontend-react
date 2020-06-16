import React, { Component } from 'react';

import ConnectedBanner from '../components/banner';

class ProtectedPage extends Component {
  render() {
    return (
      <div>
        <ConnectedBanner />
        <div className="section">
          <h1>Protected Route</h1>
          <ul>
            <li>Data Item 1</li>
            <li>Data Item 2</li>
            <li>Data Item 3</li>
          </ul>
        </div>
      </div>
    )
  }
}

export default ProtectedPage;