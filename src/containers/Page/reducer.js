// Constants
import {
  FETCH_PAGES,
  FETCH_PAGES_FAIL,
  FETCH_PAGES_SUCCESS,
} from './constants';

// Default state
const defaultState = {
  data: [],
  isFetching: false,
};

// Sanitize broken urls in content body
function sanitize(pages) {
  return pages.map(page => ({
    ...page,
    body_html: page.body_html.replace(/("\/\/cdn)/gi, 'https://cdn'),
  }));
}

export default (state = defaultState, action) => {
  switch (action.type) {
    case FETCH_PAGES:
      return {
        ...state,
        isFetching: true,
      };

    case FETCH_PAGES_FAIL:
      return {
        ...state,
        isFetching: false,
      };

    case FETCH_PAGES_SUCCESS:
      return {
        ...state,
        isFetching: false,
        data: sanitize(action.payload.pages),
      };

    default:
      return state;
  }
};
