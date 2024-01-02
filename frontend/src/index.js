import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

require('dotenv').config();

const clientId = process.env.REACT_APP_GOOGLE_CLIENT_ID;

ReactDOM.render(
  <React.StrictMode>
    <App clientId={clientId} />
  </React.StrictMode>,
  document.getElementById('root')
);