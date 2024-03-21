import React from 'react'
import * as ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { Provider } from 'react-redux';
import {store} from "../src/app/store.js"
import './index.css'
import App from './App.jsx';

ReactDOM.createRoot(document.getElementById('herothemesmovies')).render(
  <React.StrictMode>
    <Provider store={store}>
    <BrowserRouter>
        <App />
    </BrowserRouter>
    </Provider>
  </React.StrictMode>
)


