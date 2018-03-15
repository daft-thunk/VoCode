import Artyom from 'artyom.js';
import store, { addOutput } from './store';
//const artyom = new Artyom();

const commands = [
  {
    commandName: 'loop/for',
    indexes: ['loop', 'luke', 'loofa'],
    text: `for (let i = 0; i < arr.length; i++) {}`
  },
  {
    commandName: 'function/arrow',
    indexes: ['function', 'faction', 'shannon'],
    text: `const func = () => {}`
  },
  {
    commandName: 'variable/const',
    indexes: ['const *'],
    text: `const`,
    smart: true
  }
].map(obj => {
  const artyCommand = {
    indexes: obj.indexes
  };
  if (!obj.smart) {
    artyCommand.action = function() {
      store.dispatch(addOutput(obj.text));
    };
  } else {
    artyCommand.action = function(i, wildcard) {
      store.dispatch(addOutput(`${obj.text} ${wildcard} = ''`));
    };
    artyCommand.smart = true;
  }
  return artyCommand;
});

artyom.addCommands(commands);

function startContinuousArtyom() {
  artyom.fatality();// use this to stop any of

  setTimeout(function() {
    // if you use artyom.fatality , wait 250 ms to initialize again.
    artyom
      .initialize({
        lang: 'en-GB', // A lot of languages are supported. Read the docs !
        continuous: true, // Artyom will listen forever
        listen: true, // Start recognizing
        debug: false, // Show everything in the console
        speed: 1, // talk normally,
        soundex: true
      })
      .then(function() {
        console.log('Ready to work !');
      });
  }, 250);
}

const tenSeconds = 10000;
// startRestartArty
export default () => {
  setInterval(() => {
    startContinuousArtyom();
  }, tenSeconds);
};

// var _commands = [
//   {
//     indexes: ['loop', 'Luke', 'loofa'], // These spoken words will trigger the execution of the command
//     action: function() {
//       // Action to be executed when a index match with spoken word
//       // artyom.say("I'm sorry I can't do that Dave");
//       // store.dispatch(addOutput('jk, lol'));
//       store.dispatch(addOutput(`for (let i = 0; i < arr.length; i++) {}`));
//     }
//   },
//   {
//     indexes: ['function', 'faction', 'shannon'], // These spoken words will trigger the execution of the command
//     action: function() {
//       // Action to be executed when a index match with spoken word
//       artyom.say('Right away boss!');
//       store.dispatch(addOutput(`const func = () => {}`));
//     }
//   }
// ];
