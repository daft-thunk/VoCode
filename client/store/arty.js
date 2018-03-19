import axios from 'axios'
import interpreter from '../../utils/interpreter'
import { cmdOutput } from './commands'
const ADD = 'add';

export const addOutput = (snippet) => ({type: ADD, snippet});


export const addOutputThunk = (base64data) => {
  return dispatch => {
    axios.post('https://speech.googleapis.com/v1/speech:recognize?key=AIzaSyBxs-oE9FfcxdCeLOgxP6Ia_ufy8QzijN0', {
      config: {
       encoding: 'LINEAR16',
       sampleRateHertz: 44100,
       languageCode: 'en-US',
       speechContexts: {
         phrases: ['function']
       }
     },
     audio: {
       content: base64data
     }
  }).then(res => {
    const parsed = res.data.results[0].alternatives[0].transcript
    dispatch(addOutput(interpreter(parsed)))
    dispatch(cmdOutput(parsed))
  })
  }
}


export default function(state = [], action) {
  switch (action.type){
    case ADD:
      if (action.snippet) return [...state, action.snippet];
      else return state
    default:
      return state;
  }
}

