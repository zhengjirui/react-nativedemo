import React from 'react';
import ReactDOM from 'react-dom';
import {browserHistory} from 'react-router';
import {Provider} from 'react-redux';


import './index.css';
import RouterMap from './router';
import configureStore from './store/configureStore';
import registerServiceWorker from './registerServiceWorker';

// http://www.runoob.com/tags/ref-byfunc.html

ReactDOM.render(
    <Provider store={configureStore()}>
        <RouterMap history={browserHistory}/>
    </Provider>
    , document.getElementById('root'));
registerServiceWorker();
