import './scss/main.scss';
import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import App from './components/app.jsx';
import {createStore, applyMiddleware} from 'redux';
import thunk from "redux-thunk";
import {createAPI} from "./services/api";
import {reducer} from './store/reducer';
import {composeWithDevTools} from 'redux-devtools-extension';

const api = createAPI();
const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk.withExtraArgument(api))));

ReactDOM.render(
  <Provider store={store}>
    <App/>
  </Provider>,
  document.querySelector(`#root`)
);

//функция, которая перезаписывает ключи объекта в верхний регистр
function getRewritenObj(obj) {
  function getNewKey(o) {
    for(var key in o) {
      if(typeof(o[key]) === 'object') {
        getNewKey(o[key]);
        o[key.toUpperCase()] = o[key];
        delete o[key];
      } else {
        o[key.toUpperCase()] = o[key];
        delete o[key];
      }
    }
  }

  getNewKey(obj);
  console.log(obj);
};

const a = {
  a: 1,
  b: {
    c: 2,
    d: {
      e: 3,
      f: {
        g: 4
      }
    }
  }
};

getRewritenObj(a);