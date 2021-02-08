import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
// import logger from 'redux-logger';
import Combine from './Combine';
import thunk from 'redux-thunk';
export const Store = createStore(
  Combine,
  composeWithDevTools(applyMiddleware( thunk))
);