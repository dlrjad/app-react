import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

//import App from './components/Container.js';
import App from './components/main.js';
import AppOP from './components/Sum_Subtract.js';

//import App from './components/Map.js';

import registerServiceWorker from './registerServiceWorker';

//ReactDOM.render(<App/>, document.getElementById('root'));
ReactDOM.render(<App/>, document.getElementById('main'));
ReactDOM.render(<AppOP/>, document.getElementById('sumsubtract'));

registerServiceWorker();




/*function tick() {
    const element = (
        <div>
        <h2>{new Date().toLocaleTimeString()}</h2>
        </div>
    );
    ReactDOM.render(element, document.getElementById('root'));
    ReactDOM.render(<App/>, document.getElementById('root'));
}

setInterval(tick, 1000);*/
