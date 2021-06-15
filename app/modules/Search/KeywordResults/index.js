/**
 *
 * KeywordResults
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'react-bootstrap';

function KeywordResults({ loading, error, items }) {
  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  if (items) {
    return (
      <div className="d-flex gap-1 flex-wrap mb-5">
        {items.map(keyword => (
          <Button key={keyword.id} size="sm" variant="outline-secondary">
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
