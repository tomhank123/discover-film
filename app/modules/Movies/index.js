/**
 *
 * Movies
 *
 */

import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { createStructuredSelector } from 'reselect';
import { bindActionCreators, compose } from 'redux';
import { Switch, Route } from 'react-router-dom';

import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import { Container } from 'react-bootstrap';
import MovieDetails from 'modules/MovieDetails';
import Header from 'components/Header';
import MovieFrame from './Frame';

import * as actions from './actions';
import { makeSelectCollections } from './selectors';
import reducer from './reducer';
import saga from './saga';

export function Movies({ collections, onLoadCollections, ...routeProps }) {
  useInjectReducer({ key: 'movies', reducer });
  useInjectSaga({ key: 'movies', saga });

  const { match } = routeProps;

  useEffect(() => {
    onLoadCollections();
  }, []);

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
            <Container className="py-5">
              <MovieFrame whoami="Collections" isSwiper {...collections} />
            </Container>
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
  collections: PropTypes.object,
  onLoadCollections: PropTypes.func,
};

const mapStateToProps = createStructuredSelector({
  collections: makeSelectCollections(),
});

function mapDispatchToProps(dispatch) {
  const onLoadCollections = actions.getCollections.request;

  return {
    ...bindActionCreators(
      {
        onLoadCollections,
      },
      dispatch,
    ),
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(withConnect)(Movies);
