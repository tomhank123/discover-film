/**
 *
 * RatioImage
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import Skeleton from 'react-loading-skeleton';
import { Image } from 'react-bootstrap';
import StyledRatio from './StyledRatio';

function RatioImage({ loading, width = 1, height = 1, ...restProps }) {
  if (loading) {
    return (
      <StyledRatio width={width} height={height}>
        <Skeleton width="100%" height="100%" {...restProps} />
      </StyledRatio>
    );
  }

  return (
    <StyledRatio width={width} height={height} title={restProps.alt}>
      {restProps.src && <Image {...restProps} />}
    </StyledRatio>
  );
}

RatioImage.propTypes = {
  loading: PropTypes.bool,
  width: PropTypes.number,
  height: PropTypes.number,
};

export default RatioImage;
