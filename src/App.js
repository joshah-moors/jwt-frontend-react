import React from 'react';
import ReactDOM from 'react-dom';
//import './App.css';
import styles from './mystyle.module.css';

class Car extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      brand: "Ford",
      model: "Mustang",
      color: "red",
      year: 1964
    }
  }
  changeColor = () => {
    this.setState({color: "blue"});
  }
  render() {
    return (
      <div>
        <h1>My {this.state.brand}</h1>
        <p>
          It is a {this.state.color} {this.state.model} from {this.state.year}
        </p>
        <button
          type="button"
          onClick={this.changeColor}
        >Change color</button>
      </div>
    );
  }
}
/*
Mounting methods:
    • constructor()
    • getDerivedStateFromProps()
    • render()
    • componentDidMount()
*/

//class Header extends React.Component {
//  constructor(props) {
//    super(props);
//    this.state = {favoritecolor: "red"};
//  }
//  //static getDerivedStateFromProps(props, state) {
//  //  return {favoritecolor: props.favcol };
//  //}
//  componentDidMount() {
//    setTimeout(() => {
//      this.setState({favoritecolor: "beige"})
//    }, 1000)
//  }
//  render() {
//    return (
//      <h1>My Favorite Color is {this.state.favoritecolor}</h1>
//    );
//  }
//}

/*
Updating Methods:
    • getDerivedStateFromProps()
    • shouldComponentUpdate()
    • render()
    • getSnapshotBeforeUpdate()
    • componentDidUpdate()
*/
class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {favoritecolor: "red"};
  }
  //static getDerivedStateFromProps(props, state) {
  //  return {favoritecolor: props.favcol};
  //}
  //shouldComponentUpdate() {
  //  return true;
  //}
  //changeColor = () => {
  //  this.setState({favoritecolor: "blue"});
  //}
  componentDidMount() {
    setTimeout(() => {
      this.setState({favoritecolor: "yellow"})
    }, 1000)
  }
  getSnapshotBeforeUpdate(prevProps, prevState) {
    document.getElementById("div1").innerHTML = "Before the update, favorite was " + prevState.favoritecolor;
  }
  componentDidUpdate() {
    document.getElementById("div2").innerHTML = "The updated favorite is " + this.state.favoritecolor;
  }
  render() {
    return (
      <div>
        <h1>My Favorite Color is {this.state.favoritecolor}</h1>
        <div id="div1"></div>
        <div id="div2"></div>
      </div>
    );
  }
}

/*
Unmounting phase of component lifecycle
    • componentWillUnmount
*/

function shoot() {
  alert("Great shot!");
}

class Container extends React.Component {
  constructor(props) {
    super(props);
    this.state = {show: true};
  }
  delHeader = () => {
    this.setState({show: false});
  }
  render() {
    let myheader;
    if (this.state.show) {
      myheader = <Child />;
    };
    return (
      <div>
      {myheader}
      <button type="button" onClick={this.delHeader}>Delete Header</button>
      <br />
      <button type="button" onClick={shoot}>Shoot</button>
      </div>
    );
  }
}

class Child extends React.Component {
  componentWillUnmount() {
    alert("The component named Header is about to be unmounted");
  }
  render() {
    return (
      <h1>Hello World!</h1>
    );
  }
}

/*
    EVENT HANDLERS
*/
class Football extends React.Component {
  shoot = (a, b) => {
    alert(b.type);
  }
  render() {
    return(
      <button onClick={(ev) => this.shoot("Goal", ev)}>Take the shot</button>
    );
  }
}

/*
    FORMS
*/
class ThisForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      age: null,
      errormessage: '',
    };
  }
  mySubmitHandler = (event) => {
    event.preventDefault();
    let age = this.state.age;
    //if (!Number(age)) {
    //  alert("Your age must be a number");
    //}
    alert("You are submitting " + this.state.username);
  }
  myChangeHandler = (event) => {
    //this.setState({username: event.target.value});
    let nam = event.target.name;
    let val = event.target.value;
    let err = '';
    if (nam === "age") {
      if (val != "" && !Number(val)) {
        err = <strong>Your age must be a number</strong>;
      }
    }
    // could put form validation here
    this.setState({errormessage: err});
    this.setState({[nam]: val});
  }
  render() {
    //let header = "";
    //if (this.state.username) {
    //  header = <h1>Hello {this.state.username}</h1>
    //} else {
    //  header = "";
    //}
    return (
      <form onSubmit={this.mySubmitHandler}>
        <h1>Hello {this.state.username} {this.state.age}</h1>
        <p>Enter your name:</p>
        <input
          type='text'
          name='username'
          onChange={this.myChangeHandler}
        />
        <p>Enter your age:</p>
        <input
          type='text'
          name='age'
          onChange={this.myChangeHandler}
        />
        {this.state.errormessage}
        <input
          type="submit"
        />
      </form>
    );
  }
}

class MyForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      description: 'The content of a textarea goes in the value attribute',
      mycar: 'Volvo',
    };
  }
  render() {
    return (
      <form>
        <textarea value={this.state.description} />
        <br />
        <select value={this.state.mycar}>
          <option value="Ford">Ford</option>
          <option value="Volvo">Volvo</option>
          <option value="Fiat">Fiat</option>
        </select>
      </form>
    );
  }
}


/*
    React Styling
*/

class MyHeader extends React.Component {
  render() {
    const mystyle = {
      color: "white",
      backgroundColor: "DodgerBlue",
      padding: "10px",
      fontFamily: "Arial",
    }
    return (
      <div>
      <h1 className={styles.bigblue} >Hello Style!</h1>
      <p>Add a little style</p>
      </div>
    );
  }
}


export default MyHeader;