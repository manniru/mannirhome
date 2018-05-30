import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import App from './App';
import SwitchesGroup from './mannir/home/SwitchesGroup'
import App from './mannir/home/App'
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
