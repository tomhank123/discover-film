/**
 *
 * CombinedSection
 *
 */

import PropTypes from 'prop-types';
import React from 'react';
import PlayerFrame from './PlayerFrame';
import ReviewFrame from './ReviewFrame';
import SimilarFrame from './SimilarFrame';

function CombinedSection({ whoami, ...restProps }) {
  switch (whoami) {
    case 'Review':
      return <ReviewFrame {...restProps} />;
    case 'Similar':
      return <SimilarFrame {...restProps} />;
    case 'Player':
      return <PlayerFrame {...restProps} />;
    default:
      return <section />;
  }
}

CombinedSection.propTypes = {
  whoami: PropTypes.oneOf(['Review', 'Similar', 'Player']),
};

export default CombinedSection;
