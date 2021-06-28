/*
 *
 * App reducer
 *
 */
import produce from 'immer';
import { FAILURE, REQUEST, SUCCESS } from 'utils/reduxUtils';
import { GET_MEDIA_DETAILS } from './actions';

export const initialState = {
  mediaDetails: {
    loading: false,
    error: false,
    item: false,
  },
};

/* eslint-disable default-case, no-param-reassign */
const appReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case GET_MEDIA_DETAILS[REQUEST]:
        draft.mediaDetails.loading = true;
        break;

      case GET_MEDIA_DETAILS[SUCCESS]:
        draft.mediaDetails.loading = false;
        draft.mediaDetails.error = false;
        reduceMediaDetails(action.response, draft);
        break;

      case GET_MEDIA_DETAILS[FAILURE]:
        draft.mediaDetails.loading = false;
        draft.mediaDetails.error = action.response;
        break;
    }
  });

export default appReducer;

function reduceMediaDetails(response, draft) {
  draft.mediaDetails.item = response;
}
