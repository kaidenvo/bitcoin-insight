import './index.css';

import 'babel-polyfill'; // for Promise implementation
import React from 'react';
import { render } from 'react-dom';

import App from './App';
import AppStore from './AppStore';
import registerServiceWorker from './registerServiceWorker';

render(<App store={AppStore()} />, document.getElementById('root'));
registerServiceWorker();
