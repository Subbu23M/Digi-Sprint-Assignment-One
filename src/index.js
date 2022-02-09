import React from 'react';
import ReactDOM from 'react-dom';

import { BrowserRouter } from 'react-router-dom';

import App from './Components/App';

const rootElement = document.getElementById('root');

const jsx = (
    <BrowserRouter>
        <App />
    </BrowserRouter>
)

// ReactDOM.render(
//     jsx,rootElement
// );