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
import * as mediaUtils from 'utils/mediaUtils';
import messages from '../messages';
import Counter from './Counter';

function Poster({
  loading,
  model,
  rank,
  details = false,
  counter = false,
  onOpenModal,
}) {
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
        className="anchor border-0 shadow-sm h-100 rounded-3 flex-row"
        onClick={() => onOpenModal({ id, mediaType })}
      >
        {counter && (
          <Counter className="flex-shrink-0">
            <span>{rank}</span>
          </Counter>
        )}
        <RatioImage
          src={poster}
          alt={title}
          height={3}
          width={2}
          className="rounded-3 flex-grow-1"
        />{' '}
        {details && <Card.Body>Body</Card.Body>}
      </Card>
    );
  }

  return null;
}

Poster.propTypes = {
  loading: PropTypes.bool,
  model: PropTypes.object,
  rank: PropTypes.number,
  details: PropTypes.bool,
  counter: PropTypes.bool,
  onOpenModal: PropTypes.func,
};

export default Poster;
