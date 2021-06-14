/**
 *
 * People
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
import makeSelectPeople from './selectors';
import reducer from './reducer';
import saga from './saga';
import messages from './messages';

export function People() {
  useInjectReducer({ key: 'people', reducer });
  useInjectSaga({ key: 'people', saga });

  return (
    <div>
      <Helmet>
        <title>People</title>
        <meta name="description" content="Description of People" />
      </Helmet>
      <FormattedMessage {...messages.header} />
    </div>
  );
}

People.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  people: makeSelectPeople(),
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

export default compose(withConnect)(People);
