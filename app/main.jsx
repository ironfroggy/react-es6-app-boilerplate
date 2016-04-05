import ReactDOM from 'react-dom';
import React from 'react';
import App from './App.jsx';

var main = document.querySelector('main')
if (main)
    ReactDOM.render(<App/>, main);
