/**
 *
 * PersonItem
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Skeleton from 'react-loading-skeleton';
import { Card, Button, Figure } from 'react-bootstrap';
import * as personUtils from 'utils/personUtils';
import StyledPoster from './StyledPoster';

function PersonItem({ loading, item }) {
  if (loading) {
    return (
      <Card className="border-0 shadow">
        <Card.Body className="text-center">
          <Figure className="w-75">
            <Skeleton width={120} height={120} circle />
          </Figure>
          <Skeleton wrapper="h5" />
          <Skeleton wrapper="p" width="75%" />
          <div className="d-grid gap-2">
            <Button variant="outline-secondary" size="sm">
              More Info
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
          <Figure className="w-75 img-thumbnail rounded-circle">
            <StyledPoster poster={poster} />
          </Figure>
          <Card.Title
            className="text-truncate text-success mb-0"
            title={item.name}
          >
            {item.name}
          </Card.Title>
          <Card.Text className="text-muted font-monospace">
            {item.known_for_department}
          </Card.Text>
          <Card.Text className="small m-0" hidden>
            {item.popularity}
          </Card.Text>
          <div className="d-grid gap-2">
            <Button variant="outline-secondary" size="sm" as={Link} to={url}>
              More Info
            </Button>
          </div>
        </Card.Body>
      </Card>
    );
  }

  return null;
}

PersonItem.propTypes = {
  loading: PropTypes.bool,
  item: PropTypes.object,
};

export default PersonItem;
