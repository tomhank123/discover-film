/**
 *
 * Browse
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
import { Container } from 'react-bootstrap';
import Header from 'components/Header';
import BrowseFrame from './Frame';

import * as actions from './actions';
import { makeSelectCollections } from './selectors';
import reducer from './reducer';
import saga from './saga';

export function Browse({ collections, onLoadCollections }) {
  useInjectReducer({ key: 'browse', reducer });
  useInjectSaga({ key: 'browse', saga });

  useEffect(() => {
    onLoadCollections();
  }, []);

  return (
    <div>
      <Helmet>
        <title>Browse</title>
        <meta name="description" content="Description of Browse" />
      </Helmet>
      <Header />
      <BrowseFrame whoami="Jumbotron" />
      <Container className="py-5">
        <BrowseFrame whoami="Collections" isSwiper {...collections} />
      </Container>
    </div>
  );
}

Browse.propTypes = {
  collections: PropTypes.object,
  onLoadCollections: PropTypes.func,
};

const mapStateToProps = createStructuredSelector({
  collections: makeSelectCollections(),
});

function mapDispatchToProps(dispatch) {
  const onLoadCollections = actions.getCollections.request;

  return {
    ...bindActionCreators({ onLoadCollections }, dispatch),
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(withConnect)(Browse);
