import React, { Component } from 'react';
import 'bulma/css/bulma.css'


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: null,
      password: null,
      login: false,
      store: null,
      contenterror: false,
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
    fetch("http:\/\/127.0.0.1:8000/auth/api/v1/login", {
      method: "POST",
      body: JSON.stringify(this.state),
      headers: {
        'Content-Type': 'application/json;charset=UTF-8'
      }
    }).then((response) => {
      if (!response.ok) {
        alert("There's a dam error!!!");
      } else {
        response.json().then((result) => {
          console.warn("result", result);
          localStorage.setItem("login", JSON.stringify({
            login: true,
            accessToken: result.accessToken,
            refreshToken: result.refreshToken,
          }))
          this.storeCollector();
        })
      }
    })
  }
  getPrivate() {
    let token = "JWT " + this.state.store.accessToken;
    fetch("http:\/\/127.0.0.1:8000/media/api/v1/private", {
      method: "GET",
      headers: {"Authorization": token},
    }).then((response) => {
      if (!response.ok) {
        this.setState({contenterror: true});
      } else {
        response.json().then((result) => {
          this.setState({
            response: result.data
          })
          console.warn("result", result);
        })
      }
    }).catch((response) => {
      this.setState({contenterror: true});
    })
  }
  render() {
    return (
      <div class="section">
        <div>
          <h1 class="title">JWT Token with React</h1>
          {
            !this.state.login?
            <div class="container">
              <div class="field">
                <label class="label">Username</label>
                <div class="control has-icons-left has-icons-right">
                  <input 
                    class="input" 
                    type="text" 
                    onChange={(event) => {this.setState({username: event.target.value})}}
                    />
                  <span class="icon is-small is-left">
                    <i class="fas fa-user"></i>
                  </span>
                </div>
              </div>
              <div class="field">
                <label class="label">Password</label>
                <input 
                  class="input"
                  type="password"
                  onChange={(event) => {this.setState({password: event.target.value})}} 
                  onKeyPress={(event) => {this.keyPressed(event)}}
                />
              </div>
              <button 
                class="button is-rounded"
                onClick={() => {this.login()}}
              >Login</button>
              
            </div>
          :
          <div class="container">
            <textarea 
              class="textarea"
              onChange={(event) => this.setState({post: event.target.value})}>
            </textarea>
            <br />
            <button 
              class="button is-rounded"
              onClick={() => {this.getPrivate()}}
            >POST</button>
            <div class="container">
              <br />
              {this.state.contenterror &&
                <div class="columns">
                  <div class="column">
                    <article class="message is-danger">
                      <div class="message-header">
                        <p>Error</p>
                        <button class="delete" aria-label="delete"></button>
                      </div>
                      <div class="message-body">
                        There was an error processing this request.
                      </div>
                    </article>
                  </div>
                  <div class="column"></div>
                </div>
              }
            </div>
            <p>{this.state.response}</p>
          </div>
          }
        </div>
      </div>
    );
  }
}

export default App;