/**
 *
 * Frame
 *
 */

import PropTypes from 'prop-types';
import React from 'react';
import PersonList from './PersonList';

function Frame({ variant, ...restProps }) {
  switch (variant) {
    case 'PersonList':
      return <PersonList {...restProps} />;
    default:
      return <section />;
  }
}

Frame.propTypes = {
  variant: PropTypes.oneOf(['PersonList']),
};

export default Frame;
