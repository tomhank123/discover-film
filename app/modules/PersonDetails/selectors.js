import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the personDetails state domain
 */

const selectPersonDetailsDomain = state => state.personDetails || initialState;

/**
 * Other specific selectors
 */

/**
 * Default selector used by PersonDetails
 */

const makeSelectPersonDetails = () =>
  createSelector(
    selectPersonDetailsDomain,
    substate => substate,
  );

const makeSelectDetails = () =>
  createSelector(
    selectPersonDetailsDomain,
    substate => substate.details,
  );

export default makeSelectPersonDetails;
export { makeSelectDetails };
