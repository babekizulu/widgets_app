//libraries
import React from 'react';
import {createRoot} from 'react-dom/client';
//components
import App from './components/App';
//dom
const container = document.querySelector('#root');
const root = createRoot(container);

root.render(<App/>);
