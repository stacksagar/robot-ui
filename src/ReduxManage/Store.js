import { createStore, applyMiddleware } from 'redux';
import CombineReducers from './Combine';
import { composeWithDevTools } from 'redux-devtools-extension';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
export const Store = createStore(
  CombineReducers,
  composeWithDevTools(applyMiddleware(logger, thunk))
);