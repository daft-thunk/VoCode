import React, { Component } from 'react';
import { connect } from 'react-redux';
import Recorder from '../../public/recorder.js';
import axios from 'axios';
import store, { addOutputThunk } from '../store';
import { commands } from '../../utils/interpreter'

class Mic extends Component {
  constructor(props) {
    super(props)
    this.state = {
      audio_context: null,
      recorder: null
    }
    this.startUserMedia = this.startUserMedia.bind(this);
    this.stopRecording = this.stopRecording.bind(this);
    this.blobify = this.blobify.bind(this);
    this.keyDown = this.keyDown.bind(this);
    this.keyUp = this.keyUp.bind(this);
  }

  keyDown(recorder) {
    var evtobj = window.event ? event : e;
    if (evtobj.ctrlKey) {
      this.state.recorder.record()
    }
  }

  keyUp(recorder) {
      var evtobj = window.event ? event : e;
      if (evtobj.key === 'Control') {
        this.stopRecording();
      }
    }

  blobify(blob) {
    const reader = new FileReader();
    reader.readAsDataURL(blob);
    reader.onloadend = function() {
     let base64data = reader.result.split(',')[1];
    store.dispatch(addOutputThunk(base64data))
    }
  }

  stopRecording() {
    // console.log(recorder)
    this.state.recorder.exportWAV((blob) => {
      // console.log(blob)
      this.blobify(blob);
    });
    this.state.recorder.stop()
    this.state.recorder.clear()
  }

  parseCommand(input){
    const words = input.split(' ')
    console.log(words)
    const parsed = words.map(word =>{
      if (commands[word]) return `>>${word}<<`
      else return word
    })
    console.log('parsed', parsed)
    return parsed
  }

  startUserMedia(stream) {
    let input = this.state.audio_context.createMediaStreamSource(stream);

    this.setState({recorder: new Recorder(input)});
  }

  componentWillMount() {
    try {
      // webkit shim
      window.AudioContext = window.AudioContext || window.webkitAudioContext;
      navigator.getUserMedia = navigator.getUserMedia || navigator.webkitGetUserMedia;
      window.URL = window.URL || window.webkitURL;

      this.setState({audio_context: new AudioContext}, () => {
        navigator.getUserMedia({audio: true}, this.startUserMedia, function(e) {
          // __log('No live audio input: ' + e);
        });
      })
      //__log('Audio context set up.');
      //__log('navigator.getUserMedia ' + (navigator.getUserMedia ? 'available.' : 'not present!'));
    } catch (e) {
      alert('No web audio support in this browser!');
    }

    }

  render() {
    const parsedCommands = this.props.commands.map(this.parseCommand)
    console.log(parsedCommands)
    document.onkeydown = () => this.keyDown(this.state.recorder)
    document.onkeyup = () => this.keyUp(this.state.recorder, this.stopRecording)
    return (
      <div>
        {parsedCommands.map(command => <h3 key={command.join(' ')}> {command.join(' ')} </h3>)}
      </div>
    )
  }
}

const mapProps = state => ({
  commands: state.commands
})

export default connect(mapProps)(Mic);
