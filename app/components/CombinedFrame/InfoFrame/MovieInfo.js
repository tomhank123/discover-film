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
import Wrapper from './Wrapper';

function MovieInfo({ model }) {
  return (
    <Wrapper>
      <Card className="border-0 shadow-sm rounded-0">
        <Card.Body>
          <Card.Title
            className="text-truncate text-success mb-0"
            title={model.title || model.name}
          >
            {model.title || model.name}
          </Card.Title>
          <Card.Text className="text-muted font-monospace">
            {movieUtils.getReleasedYear(model.release_date)} -{' '}
            {model.genres
              .filter((_, index) => index < 2)
              .map(genre => genre.name)
              .join('/')}{' '}
            - {movieUtils.convertRuntime(model.runtime)}
          </Card.Text>
        </Card.Body>
        <Card.Body className="border-top" hidden>
          <a href={model.homepage} target="_blank" className="text-muted">
            Go to homepage
          </a>
        </Card.Body>
        <Card.Body className="border-top">
          <ContentTruncator content={model.overview} maxLength={300} />
          <ul className="list-unstyled">
            <li>
              <span className="fw-bold text-muted">Release Date: </span>
              {model.release_date}
            </li>
            <li>
              <span className="fw-bold text-muted">Status: </span>
              <span className="text-success">{model.status}</span>
            </li>
          </ul>
        </Card.Body>
      </Card>
    </Wrapper>
  );
}

MovieInfo.propTypes = {
  model: PropTypes.object,
};

export default MovieInfo;
