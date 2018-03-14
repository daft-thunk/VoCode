import Artyom from "artyom.js"
import store, {addOutput} from './store'
const artyom = new Artyom();


var commands = [
    {
        indexes:["loop", "Luke", "loofa"], // These spoken words will trigger the execution of the command
    action:function(){ // Action to be executed when a index match with spoken word
        artyom.say("I'm sorry I can't do that Dave");
        store.dispatch(addOutput('jk, lol'));
        store.dispatch(addOutput(`for (let i = 0; i < arr.length; i++)`));
        }
    },
    {
        indexes:["function", 'Function', "faction", "shannon"], // These spoken words will trigger the execution of the command
        action:function(){ // Action to be executed when a index match with spoken word
            artyom.say("Right away boss!");
            store.dispatch(addOutput(`const func = () => {}`));
    }
}
]


artyom.addCommands(commands);

export default function startContinuousArtyom(){
  // artyom.fatality();// use this to stop any of

  setTimeout(function(){// if you use artyom.fatality , wait 250 ms to initialize again.
       artyom.initialize({
          lang:"en-GB",// A lot of languages are supported. Read the docs !
          continuous:true,// Artyom will listen forever
          listen:true, // Start recognizing
          debug:false, // Show everything in the console
          speed:1 // talk normally
      }).then(function(){
          console.log("Ready to work !");
      });
  },250);
}

