import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the search state domain
 */

const selectSearchDomain = state => state.search || initialState;

/**
 * Other specific selectors
 */

/**
 * Default selector used by Search
 */

const makeSelectSearch = () =>
  createSelector(
    selectSearchDomain,
    substate => substate,
  );

const makeSelectMultiResults = () =>
  createSelector(
    selectSearchDomain,
    substate => substate.multiResults,
  );

const makeSelectKeywords = () =>
  createSelector(
    selectSearchDomain,
    substate => substate.keywords,
  );

export default makeSelectSearch;
export { makeSelectMultiResults, makeSelectKeywords };
