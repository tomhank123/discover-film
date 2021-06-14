import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the movieDetails state domain
 */

const selectMovieDetailsDomain = state => state.movieDetails || initialState;

/**
 * Other specific selectors
 */

/**
 * Default selector used by MovieDetails
 */

const makeSelectMovieDetails = () =>
  createSelector(
    selectMovieDetailsDomain,
    substate => substate,
  );

const makeSelectDetails = () =>
  createSelector(
    selectMovieDetailsDomain,
    substate => substate.details,
  );

export default makeSelectMovieDetails;
export { makeSelectDetails };
