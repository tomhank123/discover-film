/**
 *
 * MovieDetails
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
import makeSelectMovieDetails from './selectors';
import reducer from './reducer';
import saga from './saga';
import messages from './messages';

export function MovieDetails() {
  useInjectReducer({ key: 'movieDetails', reducer });
  useInjectSaga({ key: 'movieDetails', saga });

  return (
    <div>
      <Helmet>
        <title>MovieDetails</title>
        <meta name="description" content="Description of MovieDetails" />
      </Helmet>
      <Header />
      <FormattedMessage {...messages.header} />
    </div>
  );
}

MovieDetails.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  movieDetails: makeSelectMovieDetails(),
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

export default compose(withConnect)(MovieDetails);
