// Externals
import { combineReducers } from 'redux';
import { reducer as form } from 'redux-form';

// Reducers
import countries from '../containers/Delivery/reducer';
import order from '../containers/App/reducer';
import pages from '../containers/Page/reducer';
import products from '../containers/Products/reducer';
import rates from '../containers/Shipping/reducer';

const reducers = combineReducers({
  countries,
  pages,
  products,
  rates,
  form,
  order,
});

export default reducers;
