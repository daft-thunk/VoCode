import React from 'react';
import ReactDOM from 'react-dom';
import '../src/index.css';
import App from './App';
import Arty from '../src/arty';
import { Provider } from 'react-redux';
import store from './store';

import registerServiceWorker from '../src/registerServiceWorker';

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
// registerServiceWorker();

//Arty();
console.log('Arty says hi from index.js');
