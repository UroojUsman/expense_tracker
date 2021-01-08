import React from 'react';
import ReactDOM from 'react-dom';
import App from './app';
import './index.css'
import {Provider} from './Context/context'

ReactDOM.render(
  
    <Provider>
        <App></App>
    </Provider>,
    document.getElementById("root")
);