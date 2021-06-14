/**
 *
 * PersonItem
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Card, Button, Image, Figure } from 'react-bootstrap';
import * as personUtils from 'utils/personUtils';

function PersonItem({ item }) {
  const poster = personUtils.getPoster(item.profile_path);
  const url = personUtils.getUrl(item.id);

  return (
    <Card className="border-0 shadow">
      <Card.Body className="text-center">
        <Figure className="w-75">
          <Image
            src={poster}
            alt={item.name}
            thumbnail
            roundedCircle
            fluid
            className="shadow-sm"
          />
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

PersonItem.propTypes = {
  item: PropTypes.object,
};

export default PersonItem;
