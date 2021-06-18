/**
 *
 * TvDetails
 *
 */

import Header from 'components/Header';
import PropTypes from 'prop-types';
import React, { useEffect } from 'react';
import { Container } from 'react-bootstrap';
import { Helmet } from 'react-helmet';
import { connect } from 'react-redux';
import { bindActionCreators, compose } from 'redux';
import { createStructuredSelector } from 'reselect';
import { useInjectReducer } from 'utils/injectReducer';
import { useInjectSaga } from 'utils/injectSaga';
import * as tvUtils from 'utils/tvUtils';
import CombinedArticle from 'components/CombinedArticle';
import * as actions from './actions';
import TvArticle from './TvArticle';
import reducer from './reducer';
import saga from './saga';
import { makeSelectDetails } from './selectors';

export function TvDetails({ details, onLoadDetails, ...restProps }) {
  useInjectReducer({ key: 'tvDetails', reducer });
  useInjectSaga({ key: 'tvDetails', saga });

  const { location } = restProps;
  const tvId = tvUtils.getIdFromRoute(location);

  useEffect(() => {
    if (tvId) {
      onLoadDetails({ tvId });
    }
  }, [tvId]);

  if (!tvId) return null;

  return (
    <React.Fragment>
      <Helmet>
        <title>TvDetails</title>
        <meta name="description" content="Description of TvDetails" />
      </Helmet>
      <Header />
      <Container>
        <CombinedArticle {...details} />
        <TvArticle {...details} />
      </Container>
    </React.Fragment>
  );
}

TvDetails.propTypes = {
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

export default compose(withConnect)(TvDetails);
