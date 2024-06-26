import React from 'react';
import ReactDOM from 'react-dom';
import '../src/scss/main.scss';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';

import store from "./store/configureStore";

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);


