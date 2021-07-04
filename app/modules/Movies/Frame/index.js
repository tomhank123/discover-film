/**
 *
 * Frame
 *
 */

import PropTypes from 'prop-types';
import React from 'react';
import Collections from 'components/Collections';

function Frame({ variant, ...restProps }) {
  switch (variant) {
    case 'Collections':
      return <Collections {...restProps} />;
    default:
      return <section />;
  }
}

Frame.propTypes = {
  variant: PropTypes.oneOf(['Collections']),
};

export default Frame;
