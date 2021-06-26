/*
 *
 * MediaModal reducer
 *
 */
import produce from 'immer';
import { OPEN_MODAL, CLOSE_MODAL } from './constants';

export const initialState = {
  isOpen: false,
  selectedMedia: {
    id: false,
    mediaType: false,
  },
};

/* eslint-disable default-case, no-param-reassign */
const mediaModalReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case OPEN_MODAL:
        draft.isOpen = true;
        draft.selectedMedia = action.selectedMedia;
        break;

      case CLOSE_MODAL:
        draft.isOpen = false;
        break;
    }
  });

export default mediaModalReducer;
