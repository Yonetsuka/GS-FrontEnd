// index.js
import React from 'react';
import ReactDOM from 'react-dom';
import App from './routes/App'; // Importe o componente principal do aplicativo

import './styles/main.scss'; // Importe seus estilos

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);