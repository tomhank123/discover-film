/**
 *
 * CombinedSection
 *
 */

import PropTypes from 'prop-types';
import React from 'react';
import PlayerSection from './PlayerSection';
import ReviewSection from './ReviewSection';
import SimilarSection from './SimilarSection';

function CombinedSection({ whoami, ...restProps }) {
  switch (whoami) {
    case 'review':
      return <ReviewSection {...restProps} />;
    case 'similar':
      return <SimilarSection {...restProps} />;
    case 'player':
      return <PlayerSection {...restProps} />;
    default:
      return <section />;
  }
}

CombinedSection.propTypes = {
  whoami: PropTypes.oneOf(['review', 'info', 'similar', 'player']),
};

export default CombinedSection;
