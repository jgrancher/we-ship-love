import { combineReducers } from 'redux';
import { cart } from './cart';
import { products } from './products';

const reducers = combineReducers({
    cart,
    products,
});

export default reducers;
