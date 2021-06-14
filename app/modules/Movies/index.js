/**
 *
 * Movies
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import { Switch, Route } from 'react-router-dom';

import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import MovieDetails from 'modules/MovieDetails';
import Header from 'components/Header';

import makeSelectMovies from './selectors';
import reducer from './reducer';
import saga from './saga';
import messages from './messages';

export function Movies({ ...routeProps }) {
  useInjectReducer({ key: 'movies', reducer });
  useInjectSaga({ key: 'movies', saga });

  const { match } = routeProps;

  return (
    <Switch>
      <Route
        exact
        path={match.path}
        render={() => (
          <React.Fragment>
            <Helmet>
              <title>Movies</title>
              <meta name="description" content="Description of Movies" />
            </Helmet>
            <Header />
            <FormattedMessage {...messages.header} />
          </React.Fragment>
        )}
      />
      <Route
        path={`${match.path}/:personId`}
        render={() => <MovieDetails {...routeProps} />}
      />
    </Switch>
  );
}

Movies.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  movies: makeSelectMovies(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(withConnect)(Movies);
