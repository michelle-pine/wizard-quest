import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import { Route, HashRouter as Router } from 'react-router-dom'

import './index.scss';
//stores
import store from './store/index'

import App from './App';
import * as serviceWorker from './serviceWorker';

const routing = (
  <Provider store={store}>
    <div className="page-wrapper">
      <Router basename='/'>
        <div>
          <Route exact path="/" component={App} />
        </div>
      </Router>
    </div>
  </Provider>
);

ReactDOM.render(routing, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
