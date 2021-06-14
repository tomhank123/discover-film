/**
 *
 * PersonItem
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Card, Image, Figure } from 'react-bootstrap';
import * as personUtils from 'utils/personUtils';

function PersonItem({ item }) {
  const poster = personUtils.getPoster(item.profile_path);
  const url = personUtils.getUrl(item.id);

  return (
    <Card className="border-0 text-decoration-none" as={Link} to={url}>
      <Card.Body className="p-0">
        <Figure className="mb-2">
          <Image src={poster} alt={item.name} fluid />
        </Figure>
        <Card.Title
          className="text-truncate text-success mb-0 fs-6"
          title={item.name}
        >
          {item.name}
        </Card.Title>
        <small className="text-muted font-monospace">{item.character}</small>
      </Card.Body>
    </Card>
  );
}

PersonItem.propTypes = {
  item: PropTypes.object,
};

export default PersonItem;
