import React, { Component } from 'react';
import 'bulma/css/bulma.css';
import './App.css';

// Axios base instance
import API from './components/api';

// npm install react-router-dom --save
import { BrowserRouter as Router, Route, Switch, Link, Redirect } from 'react-router-dom';

import Home from './pages';


class App extends Component{
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
        </Switch>
      </Router>
    )
  }
}




/*

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


class App extends Component {
  constructor(props) {
    super(props);
    this.closeLoginError = this.closeLoginError.bind(this);
    this.state = {
      username: null,
      password: null,
      login: false,
      loginError: false,
      store: null,
      contentError: false,
      isModalVisible: false,
    };
  }
  componentDidMount() {
    this.storeCollector();
  }
  storeCollector() {
    let store = JSON.parse(localStorage.getItem('login'));
    if (store && store.login) {
      this.setState({login: true, store: store});
    }
  }
  keyPressed(event) {
    if (event.key === "Enter") {
      this.login()
    }
  }
  login() {
    API.post('/api/v1/auth/login', this.state)
      .then((response) => {
        console.warn('response', response);
        localStorage.setItem("login", JSON.stringify({
          login: true,
          accessToken: response.data.accessToken,
          refreshToken: response.data.refreshToken,
        }))
        this.storeCollector();
      })
      .catch((error) => {
        console.warn('error', error);
        this.setState({
          // Need to add something that checks return code for error message
          loginError: true,
          loginErrorMsg: 'Invalid Username/Password',
        })
      })
  }
  closeLoginError() {
    this.setState({ loginError: false });
  }
  getPrivate() {
    let headers = {
      'Authorization': `JWT ${this.state.store.accessToken}`
    }
    API.get('/api/v1/media/private', {
      headers: headers
    })
      .then((response) => {
        console.warn('response', response);
        this.setState({getResponse: response.data.data});
        this.setState({isModalVisible: true});
      })
      .catch((error) => {
        this.setState({contentError: true});
      })
  }
  closeError() {
    this.setState({contentError: false});
  }
  clearState() {
    localStorage.clear();
    this.setState({login: false});
    this.storeCollector();
  }
  closeModal() {
    this.setState({isModalVisible: false});
  }
  render() {
    return (
      <div className="section">
        <div>
          <div className={`modal ${!this.state.isModalVisible ? "" : "is-active"}`}>
            <div className="modal-background"></div>
            <div className="modal-card">
              <header className="modal-card-head">
                <p className="modal-card-title">Response from Server</p>
                <button 
                  className="delete" 
                  aria-label="close"
                  onClick={() => {this.closeModal()}}></button>
              </header>
              <section className="modal-card-body">
                {this.state.getResponse}
              </section>
              <footer className="modal-card-foot">
                <button 
                  className="button is-success"
                  onClick={() => {this.closeModal()}}
                  >OK</button>
              </footer>
            </div>
          </div>
          <h1 className="title">React Front-end Implementing JWT Login</h1>
          {
            !this.state.login?
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
          :
          <div className="container">
            <nav className="navbar" role="navigation" aria-label="main navigation">
              <div id="navbarBasicExample" className="navbar-menu">
                <div className="navbar-end">
                  <div className="navbar-item">
                    <div className="buttons">
                      <button 
                        className="button is-info is-light is-rounded"
                        onClick={() => {this.clearState()}}
                        >Clear State</button>
                    </div>
                  </div>
                </div>
              </div>
            </nav>
            <br /><br />
            <div className="columns">
              <div className="column"></div>
              <div className="column is-three-quarters custom-div">
                <br /><br />
                <button 
                  className="button is-info is-rounded"
                  onClick={() => {this.getPrivate()}}
                >GET Private Data</button>
                <div className="container">
                  <br /><br /><br />
                  {this.state.contentError &&
                    <article className="message is-danger">
                      <div className="message-header">
                        <p>Error</p>
                        <button 
                          className="delete" 
                          aria-label="delete" 
                          onClick={() => this.closeError()}
                          ></button>
                      </div>
                      <div className="message-body">
                        There was an error processing this request.
                      </div>
                    </article>
                  }
                </div>
              </div>
              <div className="column"></div>
            </div>
          </div>
          }
        </div>
      </div>
    );
  }
}

*/

export default App;