import {
    ADD_ITEM,
    SET_MESSAGE,
    SET_BILLING_ADDRESS,
    SET_DELIVERY_ADDRESS,
    SET_DELIVERY_METHOD,
} from '../data/constants';

const defaultState = {
    billing: {},
    delivery: {},
    deliveryMethod: {},
    items: [],
    message: 'Love you!',
};

export const cart = (state = defaultState, action) => {
    switch (action.type) {

    case ADD_ITEM:
        return Object.assign({}, state, {
            items: [...state.items, action.item],
        });

    case SET_MESSAGE:
        return Object.assign({}, state, {
            message: action.message,
        });

    case SET_BILLING_ADDRESS:
        return Object.assign({}, state, {
            billingAddress: action.billing,
        });

    case SET_DELIVERY_ADDRESS:
        return Object.assign({}, state, {
            delivery: action.delivery,
        });

    case SET_DELIVERY_METHOD:
        return Object.assign({}, state, {
            deliveryMethod: action.deliveryMethod,
        });

    default:
        return state;
    }
};
