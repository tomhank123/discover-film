/**
 *
 * MediaModal
 *
 */

import MediaArticle from 'components/MediaArticle';
import { getMediaDetails } from 'containers/App/actions';
import { makeSelectMediaDetails } from 'containers/App/selectors';
import { useDarkMode } from 'hooks';
import PropTypes from 'prop-types';
import React, { useEffect } from 'react';
import { Modal } from 'react-bootstrap';
import { SkeletonTheme } from 'react-loading-skeleton';
import { connect } from 'react-redux';
import { bindActionCreators, compose } from 'redux';
import { createStructuredSelector } from 'reselect';
import { useInjectReducer } from 'utils/injectReducer';
import { useInjectSaga } from 'utils/injectSaga';
import * as actions from './actions';
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

  const [darkMode] = useDarkMode();
  const makeStyles = {
    highlightColor: darkMode ? '#212529' : '#d2d2d2',
    color: darkMode ? '#141414' : '#f8f9fa',
  };

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
      // backdrop="static"
      size="lg"
    >
      <Modal.Body className="px-5">
        <SkeletonTheme
          color={makeStyles.color}
          highlightColor={makeStyles.highlightColor}
        >
          <MediaArticle {...details} />
        </SkeletonTheme>
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
