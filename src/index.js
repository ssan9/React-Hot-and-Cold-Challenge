import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Guess from './Guess';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Guess />, document.getElementById('root'));
registerServiceWorker();
