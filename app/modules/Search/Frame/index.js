/**
 *
 * Frame
 *
 */

import PropTypes from 'prop-types';
import React from 'react';
import KeywordResults from './KeywordResults';
import MultiResults from './MultiResults';

function Frame({ variant, ...restProps }) {
  switch (variant) {
    case 'KeywordResults':
      return <KeywordResults {...restProps} />;
    case 'MultiResults':
      return <MultiResults {...restProps} />;
    default:
      return <section />;
  }
}

Frame.propTypes = {
  variant: PropTypes.oneOf(['KeywordResults', 'MultiResults']),
};

export default Frame;
