/**
 *
 * MovieCard
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import PosterCard from './PosterCard';
import BackdropCard from './BackdropCard';

function MovieCard({ whoami = 'Poster', ...restProps }) {
  switch (whoami) {
    case 'Poster':
      return <PosterCard {...restProps} />;
    case 'Backdrop':
      return <BackdropCard {...restProps} />;
    default:
      return null;
  }
}

MovieCard.propTypes = {
  whoami: PropTypes.oneOf(['Poster', 'Backdrop']),
};

export default MovieCard;
