/**
 *
 * People
 *
 */

import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { createStructuredSelector } from 'reselect';
import { bindActionCreators, compose } from 'redux';
import { Switch, Route } from 'react-router-dom';

import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';

import { Container } from 'react-bootstrap';
import PersonDetails from 'modules/PersonDetails';
import Header from 'components/Header';
import PersonList from './PersonList';
import * as actions from './actions';
import { makeSelectPopularPeople } from './selectors';
import reducer from './reducer';
import saga from './saga';

export function People({ people, onLoadPeople, ...routeProps }) {
  useInjectReducer({ key: 'people', reducer });
  useInjectSaga({ key: 'people', saga });

  const { match } = routeProps;

  useEffect(() => {
    onLoadPeople({});
  }, []);

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
            <Container className="py-5">
              <PersonList {...people} />
            </Container>
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
  people: PropTypes.object,
  onLoadPeople: PropTypes.func,
};

const mapStateToProps = createStructuredSelector({
  people: makeSelectPopularPeople(),
});

function mapDispatchToProps(dispatch) {
  const onLoadPeople = actions.getPopular.request;

  return {
    ...bindActionCreators({ onLoadPeople }, dispatch),
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(withConnect)(People);
