// src/index.js
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';


import Dashboard from './components/Dashboard';  // Import Dashboard component

ReactDOM.render(
  <React.StrictMode>
    <Dashboard />  {/* Render Dashboard component instead of App */}
  </React.StrictMode>,
  document.getElementById('root')
);

// ...rest of the code
