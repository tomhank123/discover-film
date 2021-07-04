/**
 *
 * Title
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { injectIntl, intlShape } from 'react-intl';

const Title = ({ value, message, intl }) => (
  <span value={value}>{message ? intl.formatMessage(message) : value}</span>
);

Title.propTypes = {
  value: PropTypes.string.isRequired,
  message: PropTypes.object,
  intl: intlShape.isRequired,
};

export default injectIntl(Title);
