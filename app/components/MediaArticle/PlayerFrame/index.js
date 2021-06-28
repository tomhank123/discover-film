/**
 *
 * PlayerFrame
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import * as movieUtils from 'utils/movieUtils';
import Player from 'components/Player';
import Wrapper from './Wrapper';

function PlayerFrame({ items }) {
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

PlayerFrame.propTypes = {
  items: PropTypes.array,
};

export default PlayerFrame;
