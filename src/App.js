import React, { Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: null,
      password: null,
      login: false,
      store: null,
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
  login() {
    fetch("http:\/\/127.0.0.1:8000/auth/api/v1/login", {
      method: "POST",
      body: JSON.stringify(this.state),
      headers: {
        'Content-Type': 'application/json;charset=UTF-8'
      }
    }).then((response) => {
      response.json().then((result) => {
        console.warn("result", result);
        localStorage.setItem("login", JSON.stringify({
          login: true,
          accessToken: result.accessToken,
          refreshToken: result.refreshToken,
        }))
        this.storeCollector();
      })
    })
  }
  getPrivate() {
    let token = "JWT " + this.state.store.accessToken;
    fetch("http:\/\/127.0.0.1:8000/media/api/v1/private", {
      method: "GET",
      headers: {"Authorization": token},
    }).then((response) => {
      response.json().then((result) => {
        this.setState({
          response: result.data
        })
        console.warn("result", result);
      })
    })
  }
  render() {
    return (
      <div>
        <h1>JWT Token with React</h1>
        {
          !this.state.login?
          <div>
          <label>
            Username:
            <br />
            <input 
              type="text" 
              onChange={(event) => {this.setState({username: event.target.value})}}
            />
          </label>
          <br /><br />
          <label>
            Password:
            <br />
            <input 
              type="password"
              onChange={(event) => {this.setState({password: event.target.value})}}
            />
          </label>
          <br /><br />
          <button 
            onClick={() => {this.login()}}
          >Login</button>
        </div>
        :
        <div>
          <textarea onChange={(event) => this.setState({post: event.target.value})}>
            
          </textarea>
          <button onClick={() => {this.getPrivate()}}>POST</button>
          <p>{this.state.response}</p>
        </div>
        }
      </div>
    );
  }
}

export default App;