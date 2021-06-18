/**
 *
 * MovieDetails
 *
 */

import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { createStructuredSelector } from 'reselect';
import { bindActionCreators, compose } from 'redux';

import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import * as movieUtils from 'utils/movieUtils';
import { Container } from 'react-bootstrap';
import Header from 'components/Header';
import CombinedArticle from 'components/CombinedArticle';
import MovieArticle from './MovieArticle';
import * as actions from './actions';
import { makeSelectDetails } from './selectors';
import reducer from './reducer';
import saga from './saga';

export function MovieDetails({ details, onLoadDetails, ...restProps }) {
  useInjectReducer({ key: 'movieDetails', reducer });
  useInjectSaga({ key: 'movieDetails', saga });

  const { location } = restProps;
  const movieId = movieUtils.getIdFromRoute(location);

  useEffect(() => {
    if (movieId) {
      onLoadDetails({ movieId });
    }
  }, [movieId]);

  if (!movieId) return null;

  return (
    <div>
      <Helmet>
        <title>MovieDetails</title>
        <meta name="description" content="Description of MovieDetails" />
      </Helmet>
      <Header />
      <Container>
        <CombinedArticle {...details} />
        <MovieArticle {...details} />
      </Container>
    </div>
  );
}

MovieDetails.propTypes = {
  details: PropTypes.object,
  onLoadDetails: PropTypes.func,
};

const mapStateToProps = createStructuredSelector({
  details: makeSelectDetails(),
});

function mapDispatchToProps(dispatch) {
  const onLoadDetails = actions.getDetails.request;

  return {
    ...bindActionCreators({ onLoadDetails }, dispatch),
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(withConnect)(MovieDetails);
