/**
 *
 * PlayerSection
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import * as movieUtils from 'utils/movieUtils';
import Player from 'components/Player';
import Wrapper from './Wrapper';

function PlayerSection({ items }) {
  if (items) {
    const videoUrls = movieUtils.getVideoUrls(items);

    return (
      <Wrapper>
        <Player urls={videoUrls} />
      </Wrapper>
    );
  }

  return null;
}

PlayerSection.propTypes = {
  items: PropTypes.array,
};

export default PlayerSection;
