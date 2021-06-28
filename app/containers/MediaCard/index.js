/**
 *
 * MediaCard
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators, compose } from 'redux';
import * as actions from 'containers/MediaModal/actions';
import Poster from './Poster';
import Backdrop from './Backdrop';

function MediaCard({ whoami = 'Poster', ...restProps }) {
  switch (whoami) {
    case 'Poster':
      return <Poster {...restProps} />;
    case 'Backdrop':
      return <Backdrop {...restProps} />;
    default:
      return null;
  }
}

MediaCard.propTypes = {
  whoami: PropTypes.oneOf(['Poster', 'Backdrop']),
  onOpenModal: PropTypes.func,
};

function mapDispatchToProps(dispatch) {
  const onOpenModal = actions.openModal;

  return {
    ...bindActionCreators({ onOpenModal }, dispatch),
  };
}

const withConnect = connect(
  null,
  mapDispatchToProps,
);

export default compose(withConnect)(MediaCard);
