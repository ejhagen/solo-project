import React from 'react';
import { render } from 'react-dom';
import App from '/client/App.js';

console.log('---> console log from index.js')

render(
  <App />,  
  document.getElementById('root')
);