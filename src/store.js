/* eslint-disable no-underscore-dangle */
/* global window */

// Externals
import thunk from 'redux-thunk';
import {
  applyMiddleware,
  createStore,
} from 'redux';

// Reducers
import reducers from './reducers';

export default function configureStore(initialState = {}) {
  const enhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__(
    applyMiddleware(thunk),
  );

  return createStore(reducers, initialState, enhancer);
}
