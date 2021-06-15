/**
 *
 * SearchBar
 *
 */

import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { push } from 'connected-react-router';
import { compose } from 'redux';

import { useInjectReducer } from 'utils/injectReducer';
import * as searchUtils from 'utils/searchUtils';
import { Form } from 'react-bootstrap';
import { makeSelectLocation } from './selectors';
import reducer from './reducer';

export function SearchBar({ location, onChangeQuery }) {
  useInjectReducer({ key: 'searchBar', reducer });
  const initQuery = searchUtils.getQueryFromRoute(location.search);
  const [query, setQuery] = useState(initQuery);

  const onSubmit = event => {
    event.preventDefault();
    onChangeQuery(query);
  };

  useEffect(() => {
    const newQuery = searchUtils.getQueryFromRoute(location.search);

    setQuery(newQuery);
  }, [location]);

  return (
    <div>
      <Form autoComplete="off" onSubmit={onSubmit}>
        <Form.Group>
          <Form.Control
            size="lg"
            value={query}
            onChange={({ target }) => setQuery(target.value)}
            placeholder="Enter your keyword"
            className="mb-3"
          />
        </Form.Group>
      </Form>
    </div>
  );
}

SearchBar.propTypes = {
  location: PropTypes.object.isRequired,
  onChangeQuery: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  location: makeSelectLocation(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
    onChangeQuery: q => {
      dispatch(
        push({
          search: `?q=${q}`,
        }),
      );
    },
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(withConnect)(SearchBar);
