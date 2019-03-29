import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import BankAccount from './BankAccount';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <BankAccount customerName={'Jimmy'} balance={'$12,000'} />
          <img src={logo} className="App-logo" alt="logo" />
        </header>
      </div>
    );
  }
}

export default App;
