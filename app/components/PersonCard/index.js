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
    case 'simple':
      return <SimpleCard {...restProps} />;
    case 'avatar':
      return <AvatarCard {...restProps} />;
    default:
      return null;
  }
}

PersonCard.propTypes = {
  whoami: PropTypes.oneOf(['avatar', 'simple']),
};

export default PersonCard;
