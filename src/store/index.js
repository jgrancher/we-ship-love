/* eslint-disable no-underscore-dangle */
/* global window */

// Externals
import thunk from 'redux-thunk';
import {
  applyMiddleware,
  compose,
  createStore,
} from 'redux';

// Reducers
import reducers from './reducers';

export default function configureStore(initialState = {}) {
  // Use a different compose function if Redux-Devtools is present
  const cmp = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

  const enhancer = cmp(
    applyMiddleware(thunk),
  );

  return createStore(reducers, initialState, enhancer);
}
