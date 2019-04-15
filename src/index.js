import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import './styles/styles';

ReactDOM.hydrate(
  <App />,
  document.getElementById('mountNode'),
);