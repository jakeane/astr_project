/* eslint-disable comma-dangle */
import React from 'react';
import ReactDOM from 'react-dom';
import 'core-js/stable';
import 'regenerator-runtime/runtime';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';

import reducers from './reducers';
import App from './components/App';

const store = createStore(
  reducers,
  {},
  compose(
    applyMiddleware(),
    window.__REDUX_DEVTOOLS_EXTENSION__
      ? window.__REDUX_DEVTOOLS_EXTENSION__()
      : (f) => f
  )
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('main')
);
