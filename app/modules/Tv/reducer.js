/*
 *
 * Tv reducer
 *
 */
import produce from 'immer';
import { FAILURE, REQUEST, SUCCESS } from 'utils/reduxUtils';
import { GET_MEDIA_OBJECT } from './actions';

export const initialState = {
  collections: {
    loading: false,
    error: false,
    items: false,
  },
};

/* eslint-disable default-case, no-param-reassign */
const tvReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case GET_MEDIA_OBJECT[REQUEST]:
        draft.collections.loading = true;
        break;

      case GET_MEDIA_OBJECT[SUCCESS]:
        draft.collections.loading = false;
        draft.collections.error = false;
        reduceCollections(action.response, draft);
        break;

      case GET_MEDIA_OBJECT[FAILURE]:
        draft.collections.loading = false;
        draft.collections.error = action.response;
        break;
    }
  });

export default tvReducer;

function reduceCollections(response, draft) {
  draft.collections.items = response;
}
