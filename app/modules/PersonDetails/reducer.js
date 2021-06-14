/*
 *
 * PersonDetails reducer
 *
 */
import produce from 'immer';
import { FAILURE, REQUEST, SUCCESS } from 'utils/reduxUtils';
import { GET_DETAILS } from './actions';

export const initialState = {
  details: {
    loading: false,
    error: false,
    item: false,
  },
};

/* eslint-disable default-case, no-param-reassign */
const personDetailsReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case GET_DETAILS[REQUEST]:
        draft.details.loading = true;
        break;

      case GET_DETAILS[SUCCESS]:
        draft.details.loading = false;
        draft.details.error = false;
        reduceDetails(action.response, draft);
        break;

      case GET_DETAILS[FAILURE]:
        draft.details.loading = false;
        draft.details.error = action.response;
        break;
    }
  });

export default personDetailsReducer;

function reduceDetails(response, draft) {
  draft.details.item = response;
}
