/**
 *
 * MovieCard
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators, compose } from 'redux';
import * as actions from 'containers/CombinedModal/actions';
import PosterCard from './PosterCard';
import BackdropCard from './BackdropCard';

function MovieCard({ whoami = 'Poster', ...restProps }) {
  switch (whoami) {
    case 'Poster':
      return <PosterCard {...restProps} />;
    case 'Backdrop':
      return <BackdropCard {...restProps} />;
    default:
      return null;
  }
}

MovieCard.propTypes = {
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

export default compose(withConnect)(MovieCard);
