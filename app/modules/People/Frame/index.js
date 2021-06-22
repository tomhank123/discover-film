/**
 *
 * Frame
 *
 */

import PropTypes from 'prop-types';
import React from 'react';
import PersonList from './PersonList';

function Frame({ whoami, ...restProps }) {
  switch (whoami) {
    case 'PersonList':
      return <PersonList {...restProps} />;
    default:
      return <section />;
  }
}

Frame.propTypes = {
  whoami: PropTypes.oneOf(['PersonList']),
};

export default Frame;
