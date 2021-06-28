/**
 *
 * PersonDetails
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
import * as personUtils from 'utils/personUtils';
import { Container } from 'react-bootstrap';
import MediaModal from 'containers/MediaModal';
import Header from 'components/Header';
import PersonArticle from './PersonArticle';

import * as actions from './actions';
import { makeSelectDetails } from './selectors';
import reducer from './reducer';
import saga from './saga';

export function PersonDetails({ details, onLoadDetails, ...restProps }) {
  useInjectReducer({ key: 'personDetails', reducer });
  useInjectSaga({ key: 'personDetails', saga });

  const { location } = restProps;
  const personId = personUtils.getIdFromRoute(location);

  useEffect(() => {
    if (personId) {
      onLoadDetails({ personId });
    }
  }, [personId]);

  if (!personId) return null;

  return (
    <React.Fragment>
      <Helmet>
        <title>PersonDetails</title>
        <meta name="description" content="Description of PersonDetails" />
      </Helmet>
      <Header />
      <Container className="py-5">
        <PersonArticle {...details} />
      </Container>
      <MediaModal />
    </React.Fragment>
  );
}

PersonDetails.propTypes = {
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

export default compose(withConnect)(PersonDetails);
