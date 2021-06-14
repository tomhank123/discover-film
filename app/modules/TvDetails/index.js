/**
 *
 * TvDetails
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
import makeSelectTvDetails from './selectors';
import reducer from './reducer';
import saga from './saga';
import messages from './messages';

export function TvDetails() {
  useInjectReducer({ key: 'tvDetails', reducer });
  useInjectSaga({ key: 'tvDetails', saga });

  return (
    <div>
      <Helmet>
        <title>TvDetails</title>
        <meta name="description" content="Description of TvDetails" />
      </Helmet>
      <Header />
      <FormattedMessage {...messages.header} />
    </div>
  );
}

TvDetails.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  tvDetails: makeSelectTvDetails(),
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

export default compose(withConnect)(TvDetails);
