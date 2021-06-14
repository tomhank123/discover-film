/*
 *
 * People reducer
 *
 */
import produce from 'immer';
import { FAILURE, REQUEST, SUCCESS } from 'utils/reduxUtils';
import { GET_POPULAR } from './actions';

export const initialState = {
  popularPeople: {
    loading: false,
    error: false,
    items: false,
  },
};

/* eslint-disable default-case, no-param-reassign */
const peopleReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case GET_POPULAR[REQUEST]:
        draft.popularPeople.loading = true;
        break;

      case GET_POPULAR[SUCCESS]:
        draft.popularPeople.loading = false;
        draft.popularPeople.error = false;
        reducePeople(action.response, draft);
        break;

      case GET_POPULAR[FAILURE]:
        draft.popularPeople.loading = false;
        draft.popularPeople.error = action.response;
        break;
    }
  });

export default peopleReducer;

function reducePeople(response, draft) {
  draft.popularPeople.items = response.results;
}
