import React from 'react';
import ReactDOM from 'react-dom';

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

export default Header;