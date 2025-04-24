// src/index.js

import React from 'react';
import ReactDOM from 'react-dom';
import App from './App'; // This imports your main routing file (src/App.jsx)
import './assets/styles/global.css'; // Import global CSS (if applicable)

// Render the main App component into the DOM element with the id "root"
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);