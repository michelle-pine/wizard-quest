import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import { Route, HashRouter as Router } from 'react-router-dom'

import './index.scss';

//stores
import store from './store/index'

import App from './App';
import Step from './pages/Step/Step';

import * as serviceWorker from './serviceWorker';

const routing = (
  <Provider store={store}>
    <div className="page-wrapper">
      <Router basename='/'>
        <div>
          <Route exact path="/" component={App} />
          <Route path="/step/:id" component={Step} />
        </div>
      </Router>
    </div>
  </Provider>
);

const fadeOut = function(props, e, location) {
  e.preventDefault();
  let element = document.getElementById("content-wrapper");
  element.classList.remove('fade-in');
  element.classList.add('fade-out');
  const { history: { push } } = props;
  setTimeout(()=>push(location), 490);
}

export default fadeOut;

ReactDOM.render(routing, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
