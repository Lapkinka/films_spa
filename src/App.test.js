import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {createStore,applyMiddleware} from 'redux'
import reducers from './app/reducers'
import thunk from 'redux-thunk'
import logger from './app/middlewars/logger'
import {Provider} from 'react-redux'

const enhancer = applyMiddleware(thunk,logger)
const store = createStore(reducers,{},enhancer);
window.store = store;

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Provider store = {store}><App /></Provider>, div);
  ReactDOM.unmountComponentAtNode(div);
});