import { combineReducers } from 'redux';
import cart from './cart';
import pages from './pages';
import products from './products';
import shipping from './shipping';

const reducers = combineReducers({
  cart,
  pages,
  products,
  shipping,
});

export default reducers;
