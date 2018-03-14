import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { connect } from 'react-redux'
import {addOutput} from './store'
import Codemirror from './Codemirror'

class App extends Component {

  render() {

    // console.log(this.props.output)
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <h1>output</h1>
        <ul>
          {this.props.output.map((output, i) => <li key={i}>{output}</li>)}
        </ul>
        <Codemirror />
      </div>
    );
  }
}

const mapState = state => ({
  output: state.arty
})

export default connect(mapState)(App);
