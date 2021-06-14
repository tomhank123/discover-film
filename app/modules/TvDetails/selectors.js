import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the tvDetails state domain
 */

const selectTvDetailsDomain = state => state.tvDetails || initialState;

/**
 * Other specific selectors
 */

/**
 * Default selector used by TvDetails
 */

const makeSelectTvDetails = () =>
  createSelector(
    selectTvDetailsDomain,
    substate => substate,
  );

const makeSelectDetails = () =>
  createSelector(
    selectTvDetailsDomain,
    substate => substate.details,
  );

export default makeSelectTvDetails;
export { makeSelectDetails };
