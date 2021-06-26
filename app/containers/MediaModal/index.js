/**
 *
 * MediaModal
 *
 */

import MediaArticle from 'components/MediaArticle';
import { getMediaDetails } from 'containers/App/actions';
import { makeSelectMediaDetails } from 'containers/App/selectors';
import PropTypes from 'prop-types';
import React, { useEffect } from 'react';
import { Button, Modal } from 'react-bootstrap';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import { bindActionCreators, compose } from 'redux';
import { createStructuredSelector } from 'reselect';
import { useInjectReducer } from 'utils/injectReducer';
import { useInjectSaga } from 'utils/injectSaga';
import * as actions from './actions';
import messages from './messages';
import reducer from './reducer';
import saga from './saga';
import { makeSelectMedia, makeSelectModalStatus } from './selectors';

export function MediaModal({
  details,
  selectedMedia,
  modalIsOpened,
  onCloseModal,
  onLoadDetails,
}) {
  useInjectReducer({ key: 'mediaModal', reducer });
  useInjectSaga({ key: 'mediaModal', saga });

  const { id, mediaType } = selectedMedia;

  useEffect(() => {
    if (id) {
      onLoadDetails({ id, mediaType });
    }
  }, [id]);

  return (
    <Modal
      show={modalIsOpened}
      onHide={onCloseModal}
      autoFocus
      centered
      backdrop="static"
      size="lg"
      bg="dark"
    >
      <Modal.Body style={{ backgroundColor: '#141414' }}>
        <Button variant="secondary" onClick={onCloseModal}>
          Close
        </Button>
        <FormattedMessage {...messages.header} />
        <MediaArticle {...details} />
      </Modal.Body>
    </Modal>
  );
}

MediaModal.propTypes = {
  details: PropTypes.object,
  onLoadDetails: PropTypes.func,
  modalIsOpened: PropTypes.bool.isRequired,
  selectedMedia: PropTypes.object.isRequired,
  onCloseModal: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  details: makeSelectMediaDetails(),
  modalIsOpened: makeSelectModalStatus(),
  selectedMedia: makeSelectMedia(),
});

function mapDispatchToProps(dispatch) {
  const onCloseModal = actions.closeModal;
  const onLoadDetails = getMediaDetails.request;

  return {
    ...bindActionCreators({ onCloseModal, onLoadDetails }, dispatch),
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(withConnect)(MediaModal);
