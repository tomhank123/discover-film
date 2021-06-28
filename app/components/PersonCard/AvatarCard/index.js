/**
 *
 * AvatarCard
 *
 */

import RatioImage from 'components/RatioImage';
import PropTypes from 'prop-types';
import React from 'react';
import { Button, Card, Figure } from 'react-bootstrap';
import { FormattedMessage } from 'react-intl';
import Skeleton from 'react-loading-skeleton';
import { Link } from 'react-router-dom';
import * as personUtils from 'utils/personUtils';
import messages from '../messages';

function AvatarCard({ loading, item }) {
  if (loading) {
    return (
      <Card className="border-0 shadow">
        <Card.Body className="text-center">
          <Figure className="w-75 rounded-circle">
            <RatioImage loading className="rounded-circle" />
          </Figure>
          <Skeleton wrapper="h5" />
          <Skeleton wrapper="p" width="75%" />
          <div className="d-grid gap-2">
            <Button variant="outline-secondary" size="sm">
              <FormattedMessage {...messages.moreInfo} />
            </Button>
          </div>
        </Card.Body>
      </Card>
    );
  }

  if (item) {
    const poster = personUtils.getPoster(item.profile_path);
    const url = personUtils.getUrl(item.id);

    return (
      <Card className="border-0 shadow">
        <Card.Body className="text-center">
          <Figure className="w-75 rounded-circle">
            <RatioImage
              src={poster}
              alt={item.name}
              className="rounded-circle"
              thumbnail
            />
          </Figure>
          <Card.Title
            className="text-truncate mb-0 text-warning"
            title={item.name}
          >
            {item.name}
          </Card.Title>
          <Card.Text className="font-monospace text-secondary">
            {item.known_for_department}
          </Card.Text>
          <Card.Text className="small m-0" hidden>
            {item.popularity}
          </Card.Text>
          <div className="d-grid gap-2">
            <Button variant="outline-secondary" size="sm" as={Link} to={url}>
              <FormattedMessage {...messages.moreInfo} />
            </Button>
          </div>
        </Card.Body>
      </Card>
    );
  }

  return null;
}

AvatarCard.propTypes = {
  loading: PropTypes.bool,
  item: PropTypes.object,
};

export default AvatarCard;
