import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { connect } from 'react-redux'
import store, {addOutput} from './store'

class App extends Component {

  render() {

    console.log(this.props.output)
    return (
      <div className="App">
        <header className="App-header">
          {/*<img src={logo} className="App-logo" alt="logo"*/}
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <h1>output</h1>
        <ul>
          {this.props.output.map(output => <li>{output}</li>)}
        </ul>
      </div>
    );
  }
}

const mapState = state => ({
  output: state
})

export default connect(mapState)(App);
