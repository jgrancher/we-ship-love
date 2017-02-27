// Externals
import thunk from 'redux-thunk';
import devTools from 'remote-redux-devtools'; // eslint-disable-line import/no-extraneous-dependencies
import {
  applyMiddleware,
  compose,
  createStore,
} from 'redux';

// Reducers
import reducers from './reducers';

export default function configureStore(initialState = {}) {
  const enhancer = compose(
    applyMiddleware(thunk),
    devTools(),
  );

  return createStore(reducers, initialState, enhancer);
}