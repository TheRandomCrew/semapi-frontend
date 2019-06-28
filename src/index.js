import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './util/serviceWorker';
import Routes from './pages/Routes';

ReactDOM.render(
    <Routes />
    , document.getElementById('root'));

serviceWorker.register();
