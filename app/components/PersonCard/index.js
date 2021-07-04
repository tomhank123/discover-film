/**
 *
 * PersonCard
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import AvatarCard from './AvatarCard';
import SimpleCard from './SimpleCard';

function PersonCard({ variant, ...restProps }) {
  switch (variant) {
    case 'Simple':
      return <SimpleCard {...restProps} />;
    case 'Avatar':
      return <AvatarCard {...restProps} />;
    default:
      return null;
  }
}

PersonCard.propTypes = {
  variant: PropTypes.oneOf(['Avatar', 'Simple']),
};

export default PersonCard;
