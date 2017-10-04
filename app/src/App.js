import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './Components/Header';
import Menu from './Components/Menu';

class App extends Component {
  render() {
    return (
      <div className="App">
       <Header/>
       <Menu/>
      </div>
    );
  }
}

export default App;
