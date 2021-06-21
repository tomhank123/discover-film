/**
 *
 * Tv
 *
 */

import React from 'react';
// import PropTypes from 'prop-types';
import { Switch, Route } from 'react-router-dom';

import TvDetails from 'modules/TvDetails';
import Container from './ModContainer';
export function Tv({ ...routeProps }) {
  const { match } = routeProps;

  return (
    <Switch>
      <Route exact path={match.path} render={() => <Container />} />
      <Route
        path={`${match.path}/:personId`}
        render={() => <TvDetails {...routeProps} />}
      />
    </Switch>
  );
}

Tv.propTypes = {};

export default Tv;
