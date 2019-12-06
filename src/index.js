import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

const ROOT = document.getElementById('root');
ReactDOM.render( < App / > , ROOT );

serviceWorker.unregister();