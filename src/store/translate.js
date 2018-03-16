import axios from 'axios';
// const ADD = 'add';

// export const addOutput = (cmd) => ({type: ADD, cmd});

export const getTranslation = base64blob => {
  const body = {
    config: {
      encoding: 'LINEAR16',
      sampleRateHertz: 44100,
      languageCode: 'en-US'
    },
    audio: {
      content: base64blob.slice(22)
    }
  };
  // console.log(body.audio.content.slice(0,10))
  return axios
    .post(
      'https://speech.googleapis.com/v1/speech:recognize?key=AIzaSyBxs-oE9FfcxdCeLOgxP6Ia_ufy8QzijN0',
      body
    )
    .then(res => {
      console.log('GOT DAT GOOGLE RESPONSE:', res.data);
    })
    .catch(console.error);
};

// export default function(state = {}, action) {
//   switch (action.type){
//     case ADD:
//       return [...state, action.cmd];
//     default:
//       return state;
//   }
// }
