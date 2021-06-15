/**
 *
 * Search
 *
 */

import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { createStructuredSelector } from 'reselect';
import { bindActionCreators, compose } from 'redux';

import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import * as searchUtils from 'utils/searchUtils';

import { Container } from 'react-bootstrap';
import Header from 'components/Header';
import SearchBar from 'containers/SearchBar';
import MultiResults from './MultiResults';
import KeywordResults from './KeywordResults';

import * as actions from './actions';
import { makeSelectKeywords, makeSelectMultiResults } from './selectors';
import reducer from './reducer';
import saga from './saga';

export function Search({
  keywords,
  multiResults,
  onLoadKeywords,
  onLoadMultiResults,
  ...routeProps
}) {
  useInjectReducer({ key: 'search', reducer });
  useInjectSaga({ key: 'search', saga });

  const { location } = routeProps;
  const initQuery = searchUtils.getQueryFromRoute(location.search);
  const [query, setQuery] = useState(initQuery);

  useEffect(() => {
    if (query) {
      onLoadKeywords({ query });
      onLoadMultiResults({ query });
    }
  }, [query]);

  useEffect(() => {
    const newQuery = searchUtils.getQueryFromRoute(location.search);

    setQuery(newQuery);
  }, [location]);

  return (
    <div>
      <Helmet>
        <title>Search</title>
        <meta name="description" content="Description of Search" />
      </Helmet>
      <Header />
      <Container className="py-5">
        <SearchBar />
        {query ? (
          <React.Fragment>
            <h1>{`Results for "${query}"`}</h1>
            <KeywordResults {...keywords} />
            <MultiResults {...multiResults} />
          </React.Fragment>
        ) : (
          <p className="display-4">Please enter the keyword.</p>
        )}
      </Container>
    </div>
  );
}

Search.propTypes = {
  keywords: PropTypes.object,
  multiResults: PropTypes.object,
  onLoadKeywords: PropTypes.func,
  onLoadMultiResults: PropTypes.func,
};

const mapStateToProps = createStructuredSelector({
  keywords: makeSelectKeywords(),
  multiResults: makeSelectMultiResults(),
});

function mapDispatchToProps(dispatch) {
  const onLoadKeywords = actions.getKeywords.request;
  const onLoadMultiResults = actions.getMultiResults.request;

  return {
    ...bindActionCreators({ onLoadKeywords, onLoadMultiResults }, dispatch),
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(withConnect)(Search);
