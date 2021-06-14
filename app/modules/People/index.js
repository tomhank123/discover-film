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
import { Switch, Route } from 'react-router-dom';

import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';

import PersonDetails from 'modules/PersonDetails';
import Header from 'components/Header';
import makeSelectPeople from './selectors';
import reducer from './reducer';
import saga from './saga';
import messages from './messages';

export function People({ ...routeProps }) {
  useInjectReducer({ key: 'people', reducer });
  useInjectSaga({ key: 'people', saga });

  const { match } = routeProps;

  return (
    <Switch>
      <Route
        exact
        path={match.path}
        render={() => (
          <div>
            <Helmet>
              <title>People</title>
              <meta name="description" content="Description of People" />
            </Helmet>
            <Header />
            <FormattedMessage {...messages.header} />
          </div>
        )}
      />
      <Route
        path={`${match.path}/:personId`}
        render={() => <PersonDetails {...routeProps} />}
      />
    </Switch>
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
