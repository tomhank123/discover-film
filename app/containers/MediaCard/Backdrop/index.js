/**
 *
 * Backdrop
 *
 */

import ContentTruncator from 'components/ContentTruncator';
import RatioImage from 'components/RatioImage';
import PropTypes from 'prop-types';
import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { FormattedMessage } from 'react-intl';
import { Link } from 'react-router-dom';
import * as mediaUtils from 'utils/mediaUtils';
import messages from '../messages';

function Backdrop({ loading, model, details = false }) {
  if (loading) {
    return (
      <Card className="border-0 shadow-sm h-100">
        <RatioImage loading width={16} height={9} className="rounded-3" />
        <Card.Body hidden>
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
    const { backdrop, url, title, releasedYear } = mediaUtils.renderedMedia(
      model,
    );

    return (
      <Card
        className="border-0 shadow-sm h-100 rounded-3 text-decoration-none text-reset"
        as={Link}
        to={url}
      >
        <RatioImage
          src={backdrop}
          alt={title}
          width={16}
          height={9}
          fluid
          className="rounded-3"
        />
        {details && (
          <Card.Body className="d-flex flex-column">
            <h5 className="text-warning mb-1">{title}</h5>
            <p className="text-secondary font-monospace" hidden={!releasedYear}>
              {releasedYear}
            </p>
            <ContentTruncator content={model.overview} maxLength={180} />
            <div className="d-grid mt-auto">
              <Button
                size="sm"
                variant="outline-secondary"
                title="Add to My List"
              >
                Add to My List
              </Button>
            </div>
          </Card.Body>
        )}
      </Card>
    );
  }

  return null;
}

Backdrop.propTypes = {
  loading: PropTypes.bool,
  model: PropTypes.object,
  details: PropTypes.bool,
};

export default Backdrop;
