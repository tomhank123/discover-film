import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the movies state domain
 */

const selectMoviesDomain = state => state.movies || initialState;

/**
 * Other specific selectors
 */

/**
 * Default selector used by Movies
 */

const makeSelectMovies = () =>
  createSelector(
    selectMoviesDomain,
    substate => substate,
  );

const makeSelectCollections = () =>
  createSelector(
    selectMoviesDomain,
    substate => substate.collections,
  );

export default makeSelectMovies;
export { makeSelectCollections };
