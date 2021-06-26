/**
 *
 * MediaModal
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import { bindActionCreators, compose } from 'redux';

import { Button, Modal } from 'react-bootstrap';

import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import * as actions from './actions';
import { makeSelectModalStatus } from './selectors';
import reducer from './reducer';
import saga from './saga';
import messages from './messages';

export function MediaModal({ modalIsOpened, onCloseModal }) {
  useInjectReducer({ key: 'mediaModal', reducer });
  useInjectSaga({ key: 'mediaModal', saga });

  return (
    <Modal
      show={modalIsOpened}
      onHide={onCloseModal}
      autoFocus
      centered
      backdrop="static"
      className="text-dark"
    >
      <Modal.Body>
        <Button variant="secondary" onClick={onCloseModal}>
          Close
        </Button>
        <FormattedMessage {...messages.header} />
      </Modal.Body>
    </Modal>
  );
}

MediaModal.propTypes = {
  modalIsOpened: PropTypes.bool.isRequired,
  onCloseModal: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  modalIsOpened: makeSelectModalStatus(),
});

function mapDispatchToProps(dispatch) {
  const onCloseModal = actions.closeModal;

  return {
    ...bindActionCreators({ onCloseModal }, dispatch),
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(withConnect)(MediaModal);
