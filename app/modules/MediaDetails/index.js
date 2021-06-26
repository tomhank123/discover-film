/**
 *
 * MediaDetails
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

import * as mediaUtils from 'utils/mediaUtils';
import { Container } from 'react-bootstrap';
import CombinedModal from 'containers/CombinedModal';
import Header from 'components/Header';
import MediaArticle from 'components/MediaArticle';

import { makeSelectMediaDetails } from 'containers/App/selectors';
import { getMediaDetails } from 'containers/App/actions';
import reducer from './reducer';
import saga from './saga';

export function MediaDetails({ details, onLoadDetails, ...restProps }) {
  useInjectReducer({ key: 'mediaDetails', reducer });
  useInjectSaga({ key: 'mediaDetails', saga });

  const { location } = restProps;
  const { id, mediaType } = mediaUtils.getMediaFromRoute(location);

  useEffect(() => {
    if (id) {
      onLoadDetails({ id, mediaType });
    }
  }, [id]);

  if (!id) return null;

  return (
    <React.Fragment>
      <Helmet>
        <title>MediaDetails</title>
        <meta name="description" content="Description of MediaDetails" />
      </Helmet>
      {/**
        <FormattedMessage {...messages.header} />
       */}
      <Header />
      <Container>
        <MediaArticle {...details} />
      </Container>
      <CombinedModal />
    </React.Fragment>
  );
}

MediaDetails.propTypes = {
  details: PropTypes.object,
  onLoadDetails: PropTypes.func,
};

const mapStateToProps = createStructuredSelector({
  details: makeSelectMediaDetails(),
});

function mapDispatchToProps(dispatch) {
  const onLoadDetails = getMediaDetails.request;

  return {
    ...bindActionCreators({ onLoadDetails }, dispatch),
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(withConnect)(MediaDetails);
