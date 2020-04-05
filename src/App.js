import React, { Component } from 'react';
import 'bulma/css/bulma.css';
import './App.css';
import API from './components/api';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      apiBaseUrl: `http://127.0.0.1:8000`,
      username: null,
      password: null,
      login: false,
      store: null,
      contenterror: false,
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
    API.post('/auth/api/v1/login', this.state)
      .then((response) => {
        console.warn('response', response);
        localStorage.setItem("login", JSON.stringify({
          login: true,
          accessToken: response.data.accessToken,
          refreshToken: response.data.refreshToken,
        }))
        this.storeCollector();
      })
      .catch(error => alert("Invalid login"));
  }
  getPrivate() {
    let token = "JWT " + this.state.store.accessToken;
    fetch(this.state.apiBaseUrl + "/media/api/v1/private", {
      method: "GET",
      headers: {"Authorization": token},
    }).then((response) => {
      if (!response.ok) {
        this.setState({contenterror: true});
      } else {
        response.json().then((result) => {
          this.setState({response: result.data});
          this.setState({isModalVisible: true});
          console.warn("result", result);
        })
      }
    }).catch((response) => {
      this.setState({contenterror: true});
    })
  }
  closeError() {
    this.setState({contenterror: false});
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
                {this.state.response}
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
                  <br />
                  {this.state.contenterror &&
                    <div className="columns">
                      <div className="column">
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
                      </div>
                      <div className="column"></div>
                    </div>
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

export default App;