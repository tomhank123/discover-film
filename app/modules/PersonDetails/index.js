/**
 *
 * PersonDetails
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import Header from 'components/Header';
import makeSelectPersonDetails from './selectors';
import reducer from './reducer';
import saga from './saga';
import messages from './messages';

export function PersonDetails() {
  useInjectReducer({ key: 'personDetails', reducer });
  useInjectSaga({ key: 'personDetails', saga });

  return (
    <div>
      <Helmet>
        <title>PersonDetails</title>
        <meta name="description" content="Description of PersonDetails" />
      </Helmet>
      <Header />
      <FormattedMessage {...messages.header} />
    </div>
  );
}

PersonDetails.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  personDetails: makeSelectPersonDetails(),
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

export default compose(withConnect)(PersonDetails);
