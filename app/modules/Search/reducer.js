/*
 *
 * Search reducer
 *
 */
import produce from 'immer';
import { FAILURE, REQUEST, SUCCESS } from 'utils/reduxUtils';
import { GET_KEYWORDS, GET_MULTI_RESULTS } from './actions';

export const initialState = {
  multiResults: {
    loading: false,
    error: false,
    items: false,
  },
  keywords: {
    loading: false,
    error: false,
    items: false,
  },
};

/* eslint-disable default-case, no-param-reassign */
const searchReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case GET_MULTI_RESULTS[REQUEST]:
        draft.multiResults.loading = true;
        break;

      case GET_MULTI_RESULTS[SUCCESS]:
        draft.multiResults.loading = false;
        draft.multiResults.error = false;
        reduceMultiResults(action.response, draft);
        break;

      case GET_MULTI_RESULTS[FAILURE]:
        draft.multiResults.loading = false;
        draft.multiResults.error = action.response;
        break;

      case GET_KEYWORDS[REQUEST]:
        draft.keywords.loading = true;
        break;

      case GET_KEYWORDS[SUCCESS]:
        draft.keywords.loading = false;
        draft.keywords.error = false;
        reduceKeywords(action.response, draft);
        break;

      case GET_KEYWORDS[FAILURE]:
        draft.keywords.loading = false;
        draft.keywords.error = action.response;
        break;
    }
  });

export default searchReducer;

function reduceMultiResults(response, draft) {
  draft.multiResults.items = response.results;
}

function reduceKeywords(response, draft) {
  draft.keywords.items = response.results;
}
