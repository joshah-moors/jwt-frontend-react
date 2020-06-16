import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { userLogin } from '../redux/actions';

import Banner from '../components/banner';


function mapDispathToProps(dispatch) {
  return {
    userLogin: user => dispatch(userLogin(user))
  };
}


class LoginError extends Component{
  render() {
    return(
      <div>
        <br /><br />
        <article className="message is-danger">
          <div className="message-header">
            <p>Error</p>
            <button 
              className="delete" 
              aria-label="delete" 
              onClick={this.props.handler}
              ></button>
          </div>
          <div className="message-body">
            {this.props.errorMsg}
          </div>
        </article>
      </div>
    );
  }
}


class LoginPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: null,
      password: null,
      loginError: false,
    };
  }
  keyPressed(event) {
    if (event.key === "Enter") {
      this.login()
    }
  }
  login() {
    alert("ye");
  }
  render() {
    return (
      <div>
      <Banner />
        <div className="section">
          <div className="container">
            <h1 className="title">This is the Login Page</h1>
            <Link to="/">Return to Home</Link>
            <br /><br />
            <div className="container">
              <div className="field">
                <label className="label">Username</label>
                <div className="control has-icons-left has-icons-right">
                  <input 
                    className="input" 
                    type="text" 
                    onChange={(event) => {this.setState({username: event.target.value})}}
                    />
                  <span className="icon is-small is-left">
                    <i className="fas fa-user"></i>
                  </span>
                </div>
              </div>
              <div className="field">
                <label className="label">Password</label>
                <input 
                  className="input"
                  type="password"
                  onChange={(event) => {this.setState({password: event.target.value})}} 
                  onKeyPress={(event) => {this.keyPressed(event)}}
                />
              </div>
              <button 
                className="button is-rounded"
                onClick={() => {this.login()}}
              >Login</button>
              {this.state.loginError &&
              <LoginError 
                errorMsg={this.state.loginErrorMsg}
                handler={this.closeLoginError} />
              }
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default LoginPage;