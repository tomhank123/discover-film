/*
 *
 * CombinedModal actions
 *
 */

import { OPEN_MODAL, CLOSE_MODAL } from './constants';

export function openModal(id) {
  return {
    type: OPEN_MODAL,
    id,
  };
}

export function closeModal() {
  return {
    type: CLOSE_MODAL,
  };
}
