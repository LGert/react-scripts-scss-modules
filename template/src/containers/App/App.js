import React, { Component } from 'react';
import logo from '../../logo.svg';
import './App.scss';
import button from '../../style/buttons.module.scss'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/containers/App/App.js</code> and save to reload.
        </p>
        <p>This is a fork of the original CRA to make future updates of CRA easier to implement.</p>
        <p>Supports SCSS and SCSS modules. Just follow the convention of filename.module.scss and magic will happen!</p>
        <button className={button.btn}>SCSS Modules!</button>
      </div>
    );
  }
}

export default App;
