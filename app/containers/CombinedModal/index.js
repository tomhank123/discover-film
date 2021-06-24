/**
 *
 * CombinedModal
 *
 */

import React, { useEffect, useState } from 'react';
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

export function CombinedModal({ modalIsOpened, onCloseModal }) {
  useInjectReducer({ key: 'combinedModal', reducer });
  useInjectSaga({ key: 'combinedModal', saga });

  return (
    <Modal
      show={modalIsOpened}
      onHide={onCloseModal}
      autoFocus
      centered
      backdrop="static"
      className="text-dark"
    >
      <Modal.Header closeButton>
        <Modal.Title>Modal heading</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div>
          <FormattedMessage {...messages.header} />
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={onCloseModal}>
          Close
        </Button>
        <Button variant="primary" onClick={onCloseModal}>
          Save Changes
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

CombinedModal.propTypes = {
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

export default compose(withConnect)(CombinedModal);
