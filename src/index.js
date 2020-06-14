import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './redux/store';
import App from './App.js';


import { addArticle } from './redux/actions';

window.store = store;
window.addArticle = addArticle;


ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>
    , document.getElementById('root')
);