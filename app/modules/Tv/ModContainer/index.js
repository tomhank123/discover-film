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
import Header from 'components/Header';
import TvFrame from '../Frame';

import { makeSelectCollections } from '../selectors';
import * as actions from '../actions';
import reducer from '../reducer';
import saga from '../saga';

function ModContainer({ collections, onLoadCollections }) {
  useInjectReducer({ key: 'tv', reducer });
  useInjectSaga({ key: 'tv', saga });

  useEffect(() => {
    onLoadCollections();
  }, []);

  return (
    <React.Fragment>
      <Helmet>
        <title>Tv</title>
        <meta name="description" content="Description of Movies" />
      </Helmet>
      <Header />
      <Container className="py-5">
        <TvFrame whoami="Collections" isSwiper {...collections} />
      </Container>
    </React.Fragment>
  );
}

ModContainer.propTypes = {
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

export default compose(withConnect)(ModContainer);
