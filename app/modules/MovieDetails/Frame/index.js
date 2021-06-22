/**
 *
 * Frame
 *
 */

import PropTypes from 'prop-types';
import React from 'react';
import CombinedFrame from 'components/CombinedFrame';

function Frame({ whoami, ...restProps }) {
  switch (whoami) {
    case 'Info':
      return <CombinedFrame whoami="Info" {...restProps} />;
    case 'Review':
      return <CombinedFrame whoami="Review" {...restProps} />;
    case 'Similar':
      return <CombinedFrame whoami="Similar" {...restProps} />;
    case 'Player':
      return <CombinedFrame whoami="Player" {...restProps} />;
    default:
      return <section />;
  }
}

Frame.propTypes = {
  whoami: PropTypes.oneOf(['Review', 'Info', 'Similar', 'Player']),
};

export default Frame;
