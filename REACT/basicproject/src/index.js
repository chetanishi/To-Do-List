import React from 'react';
import ReactDOM from 'react-dom/client';

import App1 from './App';
import Friend from './hello';
 
 function Myapp(){
  return `Hello Everybody my friends`
 }

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
   <Myapp />
   <App1 />
   <Friend />
  </React.StrictMode>
);


