import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">A React Form</h1>
        </header>
        <p className="App-intro">
          Enter your credentials.
        </p>
        <div className="formbox">
        <form>
          <label for="humanName">Name:</label>
          <input type="text" name="humanName" id="humanName"></input>
          <label for="email">E-mail:</label>
          <input type="text" name="email" id="email"></input>
          <label for="comments">Comments:</label>
          <textarea name="comments" id="comments" rows="2" cols="20"></textarea>
          <input id="submitbtn" type="submit" value="Submit"></input>
        </form>
        </div>
      </div>
    );
  }
}

export default App;
