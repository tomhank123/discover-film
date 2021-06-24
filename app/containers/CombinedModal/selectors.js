import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the combinedModal state domain
 */

const selectCombinedModalDomain = state => state.combinedModal || initialState;

/**
 * Other specific selectors
 */

/**
 * Default selector used by CombinedModal
 */

const makeSelectCombinedModal = () =>
  createSelector(
    selectCombinedModalDomain,
    substate => substate,
  );

const makeSelectModalStatus = () =>
  createSelector(
    selectCombinedModalDomain,
    substate => substate.isOpen,
  );

export default makeSelectCombinedModal;
export { makeSelectModalStatus };
