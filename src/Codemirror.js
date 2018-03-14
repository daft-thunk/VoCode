import React, { Component } from 'react';
import {Controlled as CodeMirror} from 'react-codemirror2'
import { connect } from 'react-redux'

require('codemirror/lib/codemirror.css');
require('codemirror/theme/material.css');
require('codemirror/theme/neat.css');

require('codemirror/mode/xml/xml');
require('codemirror/mode/javascript/javascript');

export class Codemirror extends Component {
  constructor(props) {
    super(props)
    this.state = {
      value: '<h1>I ♥ react-codemirror2</h1>',
      newCommand: false
    }
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.output.length < nextProps.output.length) {
      this.setState({newCommand: true})
    }
  }

  getCursorPosition = () => {
    // doc.getCursor(?start: string) → {line, ch}
    return this.codemirror.editor.getCursor()
  }

  setCursorPosition = () => {
//     doc.setCursor(pos: {line, ch}|number, ?ch: number, ?options: object)
// Set the cursor position. You can either pass a single {line, ch} object, or the line and the character as two separate parameters. Will replace all selections with a single, empty selection at the given position. The supported options are the same as for setSelection.
    this.codemirror.editor.setCursor({pos: {line: 0}})
  }

  getCurrentValue = () => {
    const { output } = this.props
    if (!output || !output.length || !this.state.newCommand) {
      console.log('VALUE', this.state.value, output)
      return this.state.value
    }
    console.log('VALUE / NEW COMMAND', this.state.value, output)
    // this.setState({newCommand: false})
    // const newText = this.state.value + output[output.length - 1]

// GOAL: insert new command where the cursor is, not just appending to end of text.

    return this.state.value + output[output.length - 1]
    // Not actually sure how this^ is working at all.

    // return this.state.value
  }
  render() {
    const options = {
      mode: 'xml',
      theme: 'material',
      lineNumbers: true,
      indentUnit: 2,
      tabSize: 2,
      lineWrapping: true,
      autofocus: true
    }
    return (
      <CodeMirror
      ref={(codemirror) => { this.codemirror = codemirror }}
      value={this.getCurrentValue()}
      options={options}
      onCursorActivity={(evt) => {
        // console.log('CODEMIRROR',this.codemirror)
        console.log('CURSOR MOVED:', this.getCursorPosition())
        // console.log(evt)
      }}
      onBlur={(evt) => {
        console.log('BLUR:', evt)
      }}
      onBeforeChange={(editor, data, value) => {
        this.setState({value});
      }}
      onChange={(editor, data, value) => {
        [editor, data, value].forEach(item => {
          // console.log(item)
        })
        // console.log(this.state.value, this.props.output)
        // this.setState(prevState => {
        //   return {value: prevState.value + this.props.output}
        // })
      }}
      />
    )
  }
}

const mapState = state => ({
  output: state.arty
})

export default connect(mapState)(Codemirror);
