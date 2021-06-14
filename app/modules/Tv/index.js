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
import { Switch, Route } from 'react-router-dom';

import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';

import TvDetails from 'modules/TvDetails';
import Header from 'components/Header';
import makeSelectTv from './selectors';
import reducer from './reducer';
import saga from './saga';
import messages from './messages';

export function Tv({ ...routeProps }) {
  useInjectReducer({ key: 'tv', reducer });
  useInjectSaga({ key: 'tv', saga });

  const { match } = routeProps;

  return (
    <Switch>
      <Route
        exact
        path={match.path}
        render={() => (
          <div>
            <Helmet>
              <title>Tv</title>
              <meta name="description" content="Description of Tv" />
            </Helmet>
            <Header />
            <FormattedMessage {...messages.header} />
          </div>
        )}
      />
      <Route
        path={`${match.path}/:personId`}
        render={() => <TvDetails {...routeProps} />}
      />
    </Switch>
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
