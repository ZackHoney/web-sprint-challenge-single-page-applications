import React from "react";
import "./index.css";
import App from '../src/Components/App'
import { BrowserRouter } from "react-router-dom";
import { render } from 'react-dom';

render(
    <BrowserRouter>
        <App />
    </BrowserRouter>
    , document.querySelector('root')
)
