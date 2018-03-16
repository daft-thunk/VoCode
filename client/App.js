import React, { Component } from 'react';
import logo from '../src/logo.svg';
import '../src/App.css';
import { connect } from 'react-redux';
import { addOutput } from './store';
import {CodeEditor, Mic} from './components';

/*eslint-disable react/prefer-stateless-function*/
class App extends Component {
  render() {
    // console.log(this.props.output)
    return (
      <div className="App">
        <header className="App-header">
          <h1>VOCODE</h1>
          <p className="App-intro">Add code snippets with your voice</p>
        </header>
        <div className="flex">
          <div style={{flex: 3}}>
            <CodeEditor />
            <Mic />
          </div>
          <div style={{flex: 1}}>
            <h1>output</h1>
            <ul>
              {this.props.output.map((output, i) => <li key={i}>{output}</li>)}
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

const mapState = state => ({
  output: state.arty
});

export default connect(mapState)(App);
