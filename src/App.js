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
  login() {
    fetch('http://127.0.0.1:8000/auth/api/v1/login', {
      method: "POST",
      body: JSON.stringify(this.state)
    }).then((response) => {
      response.json().then((result) => {
        console.warn("result", result);
        localStorage.setItem("login", JSON.stringify({
          login: true,
          token: result.token
        }))
      })
    })
  }
  render() {
    return (
      <div>
        <h1>JWT Token with React</h1>
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
      </div>
    );
  }
}

export default App;