// Externals
import { combineReducers } from 'redux';
import { reducer as forms } from 'redux-form';

// Reducers
import pages from './containers/Page/reducer';
import products from './containers/Products/reducer';
import shipping from './containers/Shipping/reducer';
import shop from './containers/App/reducer';

const reducers = combineReducers({
  forms,
  pages,
  products,
  shipping,
  shop,
});

export default reducers;
