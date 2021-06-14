import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the people state domain
 */

const selectPeopleDomain = state => state.people || initialState;

/**
 * Other specific selectors
 */

/**
 * Default selector used by People
 */

const makeSelectPeople = () =>
  createSelector(
    selectPeopleDomain,
    substate => substate,
  );

export default makeSelectPeople;
export { selectPeopleDomain };
