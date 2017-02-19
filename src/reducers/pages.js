// Constants
import {
  FETCH_PAGES,
  FETCH_PAGES_FAIL,
  FETCH_PAGES_SUCCESS,
} from '../data/constants';

const defaultState = {
  data: [],
  isFetching: false,
};

// Sanitize broken urls in content body
function sanitize(data) {
  return data.pages.map(page => ({
    ...page,
    body_html: page.body_html.replace(/("\/\/cdn)/gi, 'https://cdn'),
  }));
}

export default (state = defaultState, action) => {
  switch (action.type) {
    case FETCH_PAGES:
      return Object.assign({}, state, {
        isFetching: true,
      });

    case FETCH_PAGES_FAIL:
      return Object.assign({}, state, {
        isFetching: false,
      });

    case FETCH_PAGES_SUCCESS:
      return Object.assign({}, state, {
        isFetching: false,
        data: sanitize(action.data),
      });

    default:
      return state;
  }
};
