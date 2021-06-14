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

export default makeSelectTvDetails;
export { selectTvDetailsDomain };
