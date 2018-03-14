const ADD = 'add'

export const addOutput = (cmd) => ({type: ADD, cmd})

export default function(state = [], action) {
  switch(action.type){
    case ADD:
      return [...state, action.cmd]
    default:
      return state
  }
}
