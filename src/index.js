import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import { Route, HashRouter as Router } from 'react-router-dom'
import $ from 'jquery'; 

import './index.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.js';
import 'font-awesome/css/font-awesome.min.css'

import './index.scss';

//stores
import store from './store/index'
import { nextStep } from "./actions/index";

import App from './App';
import Step from './pages/Step/Step';

import * as serviceWorker from './serviceWorker';

const routing = (
  <Provider store={store}>
    <div className="page-wrapper">
      <Router basename='/'>
        <div>
          <div id="starshine">
              <div className="template shine"></div>
          </div>
          <Route exact path="/" component={App} />
          <Route path="/step/:id" component={Step} />
        </div>
      </Router>
    </div>
  </Provider>
);

const fadeOut = function(props, e) {
  e.preventDefault();
  $("#content-wrapper").css("opacity", "0");
  store.dispatch(nextStep({}));
  const { history: { push } } = props;
  setTimeout(()=>push(`/step/${store.getState().currentStep}`), 490);
  $("#content-wrapper").css("opacity", "1");
}

export default fadeOut;

ReactDOM.render(routing, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

$(function() {
  var body = $('#starshine'),
      template = $('.template.shine'),
      stars =  500,
      sparkle = 20;
  
    
  var size = 'small';
  var createStar = function() {
    template.clone().removeAttr('id').css({
      top: (Math.random() * 100) + '%',
      left: (Math.random() * 100) + '%',
      webkitAnimationDelay: (Math.random() * sparkle) + 's',
      mozAnimationDelay: (Math.random() * sparkle) + 's'
    }).addClass(size).appendTo(body);
  };
 
  for(var i = 0; i < stars; i++) {
    if(i % 2 === 0) {
      size = 'small';
    } else if(i % 3 === 0) {
      size = 'medium';
    } else {
      size = 'large';
    }
    
    createStar();
  }
});