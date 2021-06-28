/**
 *
 * Poster
 *
 */

import RatioImage from 'components/RatioImage';
import PropTypes from 'prop-types';
import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { FormattedMessage } from 'react-intl';
import { Link } from 'react-router-dom';
import * as mediaUtils from 'utils/mediaUtils';
import messages from '../messages';

function Poster({ loading, model, details = false, onOpenModal }) {
  if (loading) {
    return (
      <Card className="border-0 shadow-sm h-100 rounded-3">
        <RatioImage height={3} width={2} loading className="rounded-3" />
        <Card.Body hidden={!details}>
          <div className="d-grid gap-2">
            <Button variant="secondary" size="sm">
              <FormattedMessage {...messages.watchNow} />
            </Button>
            <Button variant="outline-secondary" size="sm">
              <FormattedMessage {...messages.watchList} />
            </Button>
          </div>
        </Card.Body>
      </Card>
    );
  }

  if (model) {
    const { id, poster, title, mediaType } = mediaUtils.renderedMedia(model);

    return (
      <Card
        className="border-0 shadow-sm h-100 rounded-3"
        as={Link}
        to=""
        onClick={() => onOpenModal({ id, mediaType })}
      >
        <RatioImage
          src={poster}
          alt={title}
          height={3}
          width={2}
          className="rounded-3"
        />{' '}
        {details && <Card.Body>Body</Card.Body>}{' '}
      </Card>
    );
  }

  return null;
}

Poster.propTypes = {
  loading: PropTypes.bool,
  model: PropTypes.object,
  details: PropTypes.bool,
  onOpenModal: PropTypes.func,
};

export default Poster;
