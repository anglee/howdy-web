import _ from 'lodash';
import React from 'react';
import ReactDOM from 'react-dom';
import {createStore, applyMiddleware, compose} from 'redux';
//import {Router, Route, Link, hashHistory} from 'react-router'
import thunk from 'redux-thunk';
import {Provider} from 'react-redux';
import reducer from './reducers/reducer';
import Navigation from './containers/Navigation';
//import Recipe from './components/Recipe.jsx';
import RecipeGroup from './containers/RecipeGroup';
import {actions} from './actions/actions';
import PlanTypes from './constants/PlanTypes';

const App = () => {
  return (
    <div className="container">
      <div className="content-wrap">
        <Navigation />
        <RecipeGroup />
      </div>
    </div>
  );
};

const doCreateStore = compose(
  applyMiddleware(thunk),
  window.devToolsExtension ? window.devToolsExtension() : f => f
)(createStore);

const store = doCreateStore(reducer);
const render = () => {
  ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
    document.getElementById('root'));
};
store.subscribe(render);

const { dispatch } = store;
dispatch(actions.setPlan(PlanTypes['two_person']));
render();

