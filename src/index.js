import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import storage from './utils/storage';
import { setTokenAuthority } from './api/client';

const accessToken = storage.get('auth');
setTokenAuthority(accessToken);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App isInitiallyLogged={!accessToken} /> 
  </React.StrictMode>
);


