import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { userLogin, userLogout } from '../redux/actions';

// Axios base instance
import API from '../components/api';
import Banner from '../components/banner';



const mapStateToProps = state => {
  return { login: state.login, 
           user: state.user };
}

//function mapDispathToProps(dispatch) {
//  return {
//    userLogin: user => dispatch(userLogin(user))
//  };
//}

const mapDispathToProps = dispatch => {
  return { userLogin: user => dispatch(userLogin(user)),
           userLogout: () => dispatch(userLogout()) };
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


class ConnectedLoginPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: null,
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
    const { user } = this.state;
    localStorage.setItem("j-login", "true");
    localStorage.setItem("j-user", user);
    this.props.userLogin({ user });
    this.props.history.push('/');
    //
    //alert(this.state.user + ' ' + this.state.password);

    /*
    API.get('/api/v2/media/public', this.state)
      .then((response) => {
        //console.warn('response', response);
        //localStorage.setItem("login", JSON.stringify({
        //  login: true,
        //  accessToken: response.data.accessToken,
        //  refreshToken: response.data.refreshToken,
        //}))
        //this.storeCollector();
        alert(response.status + ' ' + response.data.status+ ' ' + response.data.data);
      })
      .catch((error) => {
        console.warn('error', error);
        this.setState({
          // Need to add something that checks return code for error message
          //loginError: true,
          //loginErrorMsg: 'Invalid Username/Password',
        })
      })
    */
  }
  logout() {
    localStorage.removeItem('j-login');
    localStorage.removeItem('j-user');
    this.props.userLogout();
  }
  render() {
    return (
      <div>
      <Banner />
        <div className="section">
          <div className="container">
            <h1 className="title">Login Page</h1>
            <Link to="/">Return to Home</Link>
            <br /><br />
            {!this.props.login?
              <div className="container">
                <div className="field">
                  <label className="label">Username</label>
                  <div className="control has-icons-left has-icons-right">
                    <input 
                      className="input" 
                      type="text" 
                      onChange={(event) => {this.setState({user: event.target.value})}}
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
            :
              <div className="container">
                <h3 className="title is-4">You are logged in as { this.props.user }</h3>
                <button
                  className="button is-rounded"
                  onClick={() => {this.logout()}}
                >Logout</button>
              </div>
            }
          </div>
        </div>
      </div>
    )
  }
}

const LoginPage = connect(
    mapStateToProps,
    mapDispathToProps)(ConnectedLoginPage);

export default LoginPage;