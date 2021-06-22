/**
 *
 * Frame
 *
 */

import PropTypes from 'prop-types';
import React from 'react';
import Collections from 'components/Collections';

function Frame({ whoami, ...restProps }) {
  switch (whoami) {
    case 'Collections':
      return <Collections {...restProps} />;
    default:
      return <section />;
  }
}

Frame.propTypes = {
  whoami: PropTypes.oneOf(['Collections']),
};

export default Frame;
