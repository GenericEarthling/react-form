import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {userName: '', 
                  userEmail: ''};
  }
  // this will save the value to state when changed
  inputChanged = event => {
    this.setState({[event.target.name]:event.target.value});
  }
  handleSubmit = event => {
    alert(`Are you really ${this.state.userName} from ${this.state.userEmail}?`);
    event.preventDefault();
  }
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
          <form onSubmit={this.handleSubmit}>
            <label for="userName">Name:</label>
            <input onChange={this.inputChanged} value={this.state.userName} type="text" name="userName" id="userName"></input>
            <label for="userEmail">E-mail:</label>
            <input onChange={this.inputChanged} value={this.state.userEmail} type="text" name="userEmail" id="userEmail"></input>
            <input id="submitbtn" type="submit" value="Submit"></input>
          </form>
          </div>
      </div>
    );
  }
}

export default App;
