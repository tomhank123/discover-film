/**
 *
 * MovieCard
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import PosterCard from './PosterCard';
import BackdropCard from './BackdropCard';

function MovieCard({ whoami = 'poster', ...restProps }) {
  switch (whoami) {
    case 'poster':
      return <PosterCard {...restProps} />;
    case 'backdrop':
      return <BackdropCard {...restProps} />;
    default:
      return null;
  }
}

MovieCard.propTypes = {
  whoami: PropTypes.oneOf(['poster', 'backdrop']),
};

export default MovieCard;
