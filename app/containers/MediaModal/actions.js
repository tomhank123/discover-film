/*
 *
 * MediaModal actions
 *
 */

import { OPEN_MODAL, CLOSE_MODAL } from './constants';

export function openModal(selectedMedia) {
  return {
    type: OPEN_MODAL,
    selectedMedia,
  };
}

export function closeModal() {
  return {
    type: CLOSE_MODAL,
  };
}
