import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the searchBar state domain
 */

const selectSearchBarDomain = state => state.searchBar || initialState;

/**
 * Other specific selectors
 */
const selectRouter = state => state.router;

/**
 * Default selector used by SearchBar
 */

const makeSelectSearchBar = () =>
  createSelector(
    selectSearchBarDomain,
    substate => substate,
  );

const makeSelectLocation = () =>
  createSelector(
    selectRouter,
    routerState => routerState.location,
  );

export default makeSelectSearchBar;
export { makeSelectLocation };
