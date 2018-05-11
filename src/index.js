import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

//import App from './components/Container.js';
//import App from './components/Map.js';
import App from './components/Add_Delete.js';

import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App/>, document.getElementById('root'));

registerServiceWorker();
