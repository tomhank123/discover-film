/**
 *
 * MovieSection
 *
 */

import PropTypes from 'prop-types';
import React from 'react';
import InfoSection from './InfoSection';
import PlayerSection from './PlayerSection';
import ReviewSection from './ReviewSection';
import SimilarSection from './SimilarSection';

function MovieSection({ whoami, ...restProps }) {
  switch (whoami) {
    case 'review':
      return <ReviewSection {...restProps} />;
    case 'info':
      return <InfoSection {...restProps} />;
    case 'similar':
      return <SimilarSection {...restProps} />;
    case 'player':
      return <PlayerSection {...restProps} />;
    default:
      return <section />;
  }
}

MovieSection.propTypes = {
  whoami: PropTypes.oneOf(['review', 'info', 'similar', 'player']),
};

export default MovieSection;
