/**
 *
 * ModContainer
 *
 */

import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { bindActionCreators, compose } from 'redux';
import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';

import { Container } from 'react-bootstrap';
import MediaModal from 'containers/MediaModal';
import Header from 'components/Header';
import MovieFrame from '../Frame';

import { makeSelectCollections } from '../selectors';
import * as actions from '../actions';
import reducer from '../reducer';
import saga from '../saga';

function ModContainer({ collections, onLoadMediaObject }) {
  useInjectReducer({ key: 'movies', reducer });
  useInjectSaga({ key: 'movies', saga });

  useEffect(() => {
    onLoadMediaObject();
  }, []);

  return (
    <React.Fragment>
      <Helmet>
        <title>Movies</title>
        <meta name="description" content="Description of Movies" />
      </Helmet>
      <Header />
      <Container className="py-5">
        <MovieFrame variant="Collections" isSwiper {...collections} />
      </Container>
      <MediaModal />
    </React.Fragment>
  );
}

ModContainer.propTypes = {
  collections: PropTypes.object,
  onLoadMediaObject: PropTypes.func,
};

const mapStateToProps = createStructuredSelector({
  collections: makeSelectCollections(),
});

function mapDispatchToProps(dispatch) {
  const onLoadMediaObject = actions.getMediaObject.request;

  return {
    ...bindActionCreators(
      {
        onLoadMediaObject,
      },
      dispatch,
    ),
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(withConnect)(ModContainer);
