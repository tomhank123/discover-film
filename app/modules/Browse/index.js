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
import MediaModal from 'containers/MediaModal';
import * as actions from './actions';
import { makeSelectCollections } from './selectors';
import reducer from './reducer';
import saga from './saga';
import BrowseFrame from './Frame';

export function Browse({ collections, onLoadMediaObject }) {
  useInjectReducer({ key: 'browse', reducer });
  useInjectSaga({ key: 'browse', saga });

  useEffect(() => {
    onLoadMediaObject();
  }, []);

  return (
    <React.Fragment>
      <Helmet>
        <title>Browse</title>
        <meta name="description" content="Description of Browse" />
      </Helmet>
      <Header />
      <BrowseFrame variant="Jumbotron" />
      <Container className="py-5">
        <BrowseFrame variant="Collections" isSwiper {...collections} />
      </Container>
      <MediaModal />
    </React.Fragment>
  );
}

Browse.propTypes = {
  collections: PropTypes.object,
  onOpenModel: PropTypes.func,
  onLoadMediaObject: PropTypes.func,
};

const mapStateToProps = createStructuredSelector({
  collections: makeSelectCollections(),
});

function mapDispatchToProps(dispatch) {
  const onLoadMediaObject = actions.getMediaObject.request;

  return {
    ...bindActionCreators({ onLoadMediaObject }, dispatch),
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(withConnect)(Browse);
