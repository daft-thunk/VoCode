import component from './templates/component'
import store from './templates/store'
import reducer from './templates/reducer'
const commands = {
  'while': () => {
    return 'while (Josh === Salty){\nreturn tear\n}'
  },
  'for': () => {
    return 'for(let i = 0; i < array.length; i++){\n}'
  },
  'react': () => {
    return 'react'
  },
  'redux': () => {
    return 'redux'
  },
  'component': () => component,
  'store': () => store,
  'reducer': () => reducer
}

const interpreter = (speech) => {

  let commandWords = speech.split(' ').filter(word => commands[word] !== undefined)
  let currCommand;
  // while (commandWords.length) {
    currCommand = commandWords.shift();
    console.log(currCommand);
    return commands[currCommand]();
  // }
}

export default interpreter;
