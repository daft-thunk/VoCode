import React, { Component } from 'react';
import './WavRecorder.css';
import { connect } from 'react-redux';
import { loadWindow, toggleRecording } from './script-wav/main';

class WavRecorder extends Component {
  constructor(props) {
    super(props);
    this.state = {
      recording: false
    };
    this.toggleRecording = this.toggleRecording.bind(this);
  }
  componentDidMount() {
    loadWindow();
  }
  toggleRecording(e) {
    toggleRecording(this.state.recording);
    this.setState(prevState => {
      return {recording: !prevState.recording};
    });
  }
  render() {
    return (
      <div>
        <div id="controls">
          <button
            id="record"
            onClick={this.toggleRecording}
          >
            RECORD
          </button>
          <button id="save">
            SAVE
          </button>
        </div>
        <div id="viz">
          <canvas id="analyser" width="100px" height="50px" />
          <canvas id="wavedisplay" width="100px" height="50px" />
        </div>
      </div>
    );
  }
}

const mapState = state => ({
  // output: state.arty
});

export default connect(mapState)(WavRecorder);
