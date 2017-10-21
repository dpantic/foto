import React, { Component } from 'react';
import './App.css';
import Login from './Login'

class App extends Component {
  render() {
    return (
      <div className="App">
       <Login />
          { this.props.children }
      </div>
    );
  }
}

export default App;

