/**
 *
 * Frame
 *
 */

import PropTypes from 'prop-types';
import React from 'react';
import Collections from 'components/Collections';
import Jumbotron from './Jumbotron';

function Frame({ whoami, ...restProps }) {
  switch (whoami) {
    case 'Jumbotron':
      return <Jumbotron {...restProps} />;
    case 'Collections':
      return <Collections {...restProps} />;
    default:
      return <section />;
  }
}

Frame.propTypes = {
  whoami: PropTypes.oneOf(['Jumbotron', 'Collections']),
};

export default Frame;
