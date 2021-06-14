/**
 *
 * Titles
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Card, Button } from 'react-bootstrap';
import * as movieUtils from 'utils/movieUtils';
import * as tvUtils from 'utils/tvUtils';

function Titles({ item }) {
  const isMovie = item.title;
  const poster = movieUtils.getPoster(item.poster_path);
  const url = isMovie ? movieUtils.getUrl(item.id) : tvUtils.getUrl(item.id);
  const title = item.title || item.name;

  return (
    <Card className="border-0 shadow-sm h-100">
      <Card.Img variant="top" src={poster} alt={title} />
      <Card.Body>
        <div className="d-grid gap-2">
          <Button variant="secondary" size="sm" as={Link} to={url}>
            Watch Now
          </Button>
          <Button variant="outline-secondary" size="sm" as={Link} to={url}>
            Watch List
          </Button>
        </div>
      </Card.Body>
    </Card>
  );
}

Titles.propTypes = {
  item: PropTypes.object,
};

export default Titles;
