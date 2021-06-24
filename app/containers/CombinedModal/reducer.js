/*
 *
 * CombinedModal reducer
 *
 */
import produce from 'immer';
import { OPEN_MODAL, CLOSE_MODAL } from './constants';

export const initialState = {
  isOpen: false,
};

/* eslint-disable default-case, no-param-reassign */
const combinedModalReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case OPEN_MODAL:
        draft.isOpen = true;
        break;

      case CLOSE_MODAL:
        draft.isOpen = false;
        break;
    }
  });

export default combinedModalReducer;
