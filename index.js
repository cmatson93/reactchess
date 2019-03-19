import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {observe} from './Game';

const root = document.getElementById('root');

observe(knightPosition =>
    ReactDOM.render(<App knightPosition={knightPosition} /> , root)
)
