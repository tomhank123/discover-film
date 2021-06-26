/**
 *
 * Player
 *
 */

import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import ReactPlayer from 'react-player';

function Player({ urls = [] }) {
  const [playing, setPlaying] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setPlaying(true);

      clearTimeout(timeout);
    }, 3000);
  }, []);

  return (
    <div className="ratio ratio-16x9 bg-secondary">
      <ReactPlayer
        width="100%"
        height="100%"
        controls
        playing={playing}
        url={[
          ...urls,
          'https://www.youtube.com/watch?v=ysz5S6PUM-U',
          'https://www.youtube.com/watch?v=oUFJJNQGwhk',
          'https://www.youtube.com/watch?v=jNgP6d9HraI',
        ]}
      />
    </div>
  );
}

Player.propTypes = {
  urls: PropTypes.array,
};

export default Player;
