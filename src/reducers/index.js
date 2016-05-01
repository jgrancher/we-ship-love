import { combineReducers } from 'redux';
import { cart } from './cart';
import { products } from './products';
import { shipping } from './shipping';

const reducers = combineReducers({
    cart,
    products,
    shipping,
});

export default reducers;
