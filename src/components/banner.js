import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import './banner.css';

const mapStateToProps = state => {
  return { login: state.login, user: state.user };
}

class Banner extends Component {
  //constructor(props) {
  //  super(props);
  //  this.state = {
  //    //login: login,
  //    //user: 'Llenora',
  //  }
  //}
  render() {
    //const { login, user } = this.props;
    return (
      <div className="banner">
        <h2 className="banner-logo">JoshahLine Web Solutions</h2>
        <h2 className="banner-text">
        {!this.props.login?
          <Link className="banner-link" to="/login">Login</Link>
        :
          <label>{ this.props.user }</label>
        }
        </h2>
      </div>
    )
  }
}

/*
// Same as above, but as a function of props
//    https://reactjs.org/blog/2015/12/18/react-components-elements-and-instances.html
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
*/

const ConnectedBanner = connect(mapStateToProps)(Banner);

export default ConnectedBanner;