import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the MediaDetails state domain
 */

const selectMediaDetailsDomain = state => state.MediaDetails || initialState;

/**
 * Other specific selectors
 */

/**
 * Default selector used by MediaDetails
 */

const makeSelectMediaDetails = () =>
  createSelector(
    selectMediaDetailsDomain,
    substate => substate,
  );

const makeSelectDetails = () =>
  createSelector(
    selectMediaDetailsDomain,
    substate => substate.details,
  );

export default makeSelectMediaDetails;
export { makeSelectDetails };
