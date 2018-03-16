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
  }
}

const interpreter = (speech) => {
  let commandWords = speech.split(commands).filter(word => commands[word] !== undefined)
  let currCommand;
  while (commandWords.length) {
    currCommand = commandWords.shift();
    return commands[currCommand]();
  }
}

export default interpreter;
