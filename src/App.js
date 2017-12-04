import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ExpenseList from './components/ExpenseList';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome MS</h2>
        </div>
        <ExpenseList />
      </div>
    );
  }
}

export default App;
