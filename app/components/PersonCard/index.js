/**
 *
 * PersonCard
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import AvatarCard from './AvatarCard';
import SimpleCard from './SimpleCard';

function PersonCard({ whoami, ...restProps }) {
  switch (whoami) {
    case 'Simple':
      return <SimpleCard {...restProps} />;
    case 'Avatar':
      return <AvatarCard {...restProps} />;
    default:
      return null;
  }
}

PersonCard.propTypes = {
  whoami: PropTypes.oneOf(['Avatar', 'Simple']),
};

export default PersonCard;
