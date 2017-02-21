// Externals
import { combineReducers } from 'redux';

// Reducers
import delivery from './containers/Delivery/reducer';
import message from './containers/Message/reducer';
import pages from './containers/Page/reducer';
import products from './containers/Products/reducer';
import shipping from './containers/Shipping/reducer';

const reducers = combineReducers({
  delivery,
  message,
  pages,
  products,
  shipping,
});

export default reducers;
