/**
 *
 * Frame
 *
 */

import PropTypes from 'prop-types';
import React from 'react';
import KeywordResults from './KeywordResults';
import MultiResults from './MultiResults';

function Frame({ whoami, ...restProps }) {
  switch (whoami) {
    case 'KeywordResults':
      return <KeywordResults {...restProps} />;
    case 'MultiResults':
      return <MultiResults {...restProps} />;
    default:
      return <section />;
  }
}

Frame.propTypes = {
  whoami: PropTypes.oneOf(['KeywordResults', 'MultiResults']),
};

export default Frame;
