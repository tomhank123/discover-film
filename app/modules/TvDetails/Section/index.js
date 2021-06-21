/**
 *
 * Section
 *
 */

import PropTypes from 'prop-types';
import React from 'react';
import CombinedSection from 'components/CombinedSection';
import InfoSection from './InfoSection';

function Section({ whoami, ...restProps }) {
  switch (whoami) {
    case 'info':
      return <InfoSection {...restProps} />;
    case 'review':
      return <CombinedSection whoami="review" {...restProps} />;
    case 'similar':
      return <CombinedSection whoami="similar" {...restProps} />;
    case 'player':
      return <CombinedSection whoami="player" {...restProps} />;
    default:
      return <section />;
  }
}

Section.propTypes = {
  whoami: PropTypes.oneOf(['review', 'info', 'similar', 'player']),
};

export default Section;
