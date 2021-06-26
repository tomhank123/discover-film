/**
 *
 * TvInfo
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { Card } from 'react-bootstrap';
// import * as tvUtils from 'utils/tvUtils';
import ContentTruncator from 'components/ContentTruncator';

function TvInfo({ model }) {
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
          {model.genres
            .filter((_, index) => index < 2)
            .map(genre => genre.name)
            .join('/')}{' '}
        </Card.Text>
        <ContentTruncator content={model.overview} maxLength={300} />
        <ul className="list-unstyled">
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

TvInfo.propTypes = {
  model: PropTypes.object,
};

export default TvInfo;
