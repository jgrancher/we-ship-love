import {
    FETCH_SHIPPING,
    FETCH_SHIPPING_FAIL,
    FETCH_SHIPPING_SUCCESS,
} from '../data/constants';

const defaultState = {
    data: [],
    isFetching: false,
};

export const shipping = (state = defaultState, action) => {
    switch (action.type) {

    case FETCH_SHIPPING:
        return Object.assign({}, state, {
            isFetching: true,
        });

    case FETCH_SHIPPING_FAIL:
        return Object.assign({}, state, {
            isFetching: false,
        });

    case FETCH_SHIPPING_SUCCESS:
        return Object.assign({}, state, {
            isFetching: false,
            data: action.data,
        });

    default:
        return state;
    }
};
