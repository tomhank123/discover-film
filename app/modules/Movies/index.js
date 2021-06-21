/**
 *
 * Movies
 *
 */

import React from 'react';
import { Switch, Route } from 'react-router-dom';
import MovieDetails from 'modules/MovieDetails';
import Container from './ModContainer';

export function Movies({ ...routeProps }) {
  const { match } = routeProps;

  return (
    <Switch>
      <Route exact path={match.path} render={() => <Container />} />
      <Route
        path={`${match.path}/:personId`}
        render={() => <MovieDetails {...routeProps} />}
      />
    </Switch>
  );
}

Movies.propTypes = {};

export default Movies;
