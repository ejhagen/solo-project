import React from 'react';
import { createRoot } from 'react-dom/client';
const container = document.getElementById('root');
const root = createRoot(container);
root.render(<App tab="home" />);



import App from '/client/App.js';

console.log('---> console log from index.js')
import styles from '/client/scss/bigStyle.scss';



//deprecated
// render(
//   <App />,  
//   document.getElementById('root')
// );