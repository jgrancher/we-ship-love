import {
    ADD_ITEM,
    SET_MESSAGE,
    SET_BILLING,
    SET_DELIVERY,
    SET_SHIPPING,
    DEFAULT_COUNTRY_ID,
} from '../data/constants';

const defaultState = {
    billing: {},
    delivery: {
        country: DEFAULT_COUNTRY_ID,
    },
    shipping: {},
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

    case SET_BILLING:
        return Object.assign({}, state, {
            billingAddress: action.billing,
        });

    case SET_DELIVERY:
        return Object.assign({}, state, {
            delivery: action.delivery,
        });

    case SET_SHIPPING:
        return Object.assign({}, state, {
            shipping: action.shipping,
        });

    default:
        return state;
    }
};
