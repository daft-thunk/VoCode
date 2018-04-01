import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { ParallaxProvider } from 'react-scroll-parallax';
import 'antd/dist/antd.css';


ReactDOM.render(
    <ParallaxProvider>
      <App />
    </ParallaxProvider>,
  document.getElementById('root')
);

