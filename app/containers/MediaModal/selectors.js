import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the mediaModal state domain
 */

const selectMediaModalDomain = state => state.mediaModal || initialState;

/**
 * Other specific selectors
 */

/**
 * Default selector used by MediaModal
 */

const makeSelectMediaModal = () =>
  createSelector(
    selectMediaModalDomain,
    substate => substate,
  );

const makeSelectModalStatus = () =>
  createSelector(
    selectMediaModalDomain,
    substate => substate.isOpen,
  );

export default makeSelectMediaModal;
export { makeSelectModalStatus };
