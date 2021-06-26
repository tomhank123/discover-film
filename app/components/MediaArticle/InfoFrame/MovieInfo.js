/**
 *
 * MovieInfo
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { Card } from 'react-bootstrap';
import * as movieUtils from 'utils/movieUtils';
import ContentTruncator from 'components/ContentTruncator';

function MovieInfo({ model }) {
  return (
    <React.Fragment>
      <Card.Body>
        <Card.Title
          className="text-truncate text-warning mb-0"
          title={model.title || model.name}
        >
          {model.title || model.name}
        </Card.Title>
        <Card.Text className="text-secondary font-monospace">
          {movieUtils.getReleasedYear(model.release_date)} -{' '}
          {model.genres
            .filter((_, index) => index < 2)
            .map(genre => genre.name)
            .join('/')}{' '}
          - {movieUtils.convertRuntime(model.runtime)}
        </Card.Text>
        <ContentTruncator content={model.overview} maxLength={300} />
        <ul className="list-unstyled">
          <li>
            <span className="fw-bold text-secondary">Release Date: </span>
            {model.release_date}
          </li>
          <li>
            <span className="fw-bold text-secondary">Status: </span>
            <span className="text-warning">{model.status}</span>
          </li>
        </ul>
      </Card.Body>
      <Card.Body className="" hidden>
        <a href={model.homepage} target="_blank" className="text-secondary">
          Go to homepage
        </a>
      </Card.Body>
    </React.Fragment>
  );
}

MovieInfo.propTypes = {
  model: PropTypes.object,
};

export default MovieInfo;
