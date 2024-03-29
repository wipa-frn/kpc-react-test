import React from 'react';
import ReactDOM from 'react-dom';
import './styles/main.scss';
import CrudApp from './views/CrudApp';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import allReducers from './reducers'

const store = createStore(allReducers)

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <CrudApp />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
