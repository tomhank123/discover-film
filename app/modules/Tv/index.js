/**
 *
 * Tv
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
import makeSelectTv from './selectors';
import reducer from './reducer';
import saga from './saga';
import messages from './messages';

export function Tv() {
  useInjectReducer({ key: 'tv', reducer });
  useInjectSaga({ key: 'tv', saga });

  return (
    <div>
      <Helmet>
        <title>Tv</title>
        <meta name="description" content="Description of Tv" />
      </Helmet>
      <FormattedMessage {...messages.header} />
    </div>
  );
}

Tv.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  tv: makeSelectTv(),
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

export default compose(withConnect)(Tv);
