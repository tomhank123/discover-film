/**
 *
 * CombinedArticle
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';
import messages from './messages';

function CombinedArticle({ loading, error, item }) {
  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  if (item) {
    return (
      <article>
        <FormattedMessage {...messages.header} />
      </article>
    );
  }

  return <p>No data</p>;
}

CombinedArticle.propTypes = {
  item: PropTypes.oneOfType([PropTypes.object, PropTypes.bool]),
  error: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
  loading: PropTypes.bool,
};

export default CombinedArticle;
