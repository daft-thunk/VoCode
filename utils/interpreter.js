import { component, store, reducer } from './templates'

export const commands = {
  'while': () => {
    return 'while (Josh === Salty){\nreturn tear\n}'
  },
  'for': () => {
    return 'for(let i = 0; i < array.length; i++){\n}'
  },
  'function': () => {
    return 'const funcName = (args) => {}'
  },
  'component': () => component,
  'store': () => store,
  'reducer': () => reducer
}

const interpreter = (speech) => {
  console.log(speech)
  let commandWords = speech.split(' ').filter(word => commands[word] !== undefined)
  let currCommand;
  // while (commandWords.length) {
    currCommand = commandWords.shift();
    if (commands[currCommand]) return commands[currCommand]();
    else console.error(`Command ${speech} not recognized`)
  // }
}

export default interpreter;
