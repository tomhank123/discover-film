/**
 *
 * KeywordResults
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
// import Skeleton from 'react-loading-skeleton';
import { Button, Spinner } from 'react-bootstrap';
import * as ROUTES from 'routes/constants';
import { Link } from 'react-router-dom';

function KeywordResults({ loading, error, items }) {
  if (loading) {
    return (
      <div className="d-flex gap-1 flex-wrap mb-5">
        {Array.from({ length: 4 })
          .map((_, index) => ({ id: index }))
          .map(keyword => (
            <Button
              size="sm"
              variant="outline-secondary"
              disabled
              key={keyword.id}
            >
              <Spinner as="span" animation="border" size="sm" />
              <span className="sr-only"> Loading...</span>
            </Button>
          ))}
      </div>
    );
  }

  if (error) {
    return <p>{error}</p>;
  }

  if (items) {
    return (
      <div className="d-flex gap-1 flex-wrap mb-5">
        {items.map(keyword => (
          <Button
            key={keyword.id}
            size="sm"
            variant="outline-secondary"
            as={Link}
            to={`${ROUTES.SEARCH}?q=${keyword.name}`}
          >
            {keyword.name}
          </Button>
        ))}
      </div>
    );
  }

  return <p>No data now!</p>;
}

KeywordResults.propTypes = {
  items: PropTypes.oneOfType([PropTypes.array, PropTypes.bool]),
  error: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
  loading: PropTypes.bool,
};

export default KeywordResults;
