/**
 *
 * InfoSection
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { Button, Card } from 'react-bootstrap';
import * as movieUtils from 'utils/movieUtils';
import * as commonUtils from 'utils/commonUtils';
import Wrapper from './Wrapper';

function InfoSection({ loading, model }) {
  if (loading) {
    return (
      <Wrapper>
        <p>Loading...</p>
      </Wrapper>
    );
  }

  if (model) {
    const overview = movieUtils.getOverview(model.overview);
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
          <Card.Body className="border-top">
            <a href={model.homepage} target="_blank" className="text-muted">
              Go to homepage
            </a>
          </Card.Body>
          <Card.Body className="border-top">
            <p hidden>{model.vote_average}</p>
            <p hidden>{model.vote_count}</p>
            <div className="d-flex justify-content-between align-items-center">
              <p className="mb-0">
                {model.popularity} <br />
                <small className="text-muted">From TMDB User</small>
              </p>
              <div>
                <Button variant="outline-success" size="sm" className="me-1">
                  Like
                </Button>
                <Button variant="outline-secondary" size="sm">
                  Dislike
                </Button>
              </div>
            </div>
          </Card.Body>
          <Card.Body className="border-top">
            {/* eslint-disable react/no-danger */}
            <p dangerouslySetInnerHTML={commonUtils.createMarkup(overview)} />
            <ul className="list-unstyled">
              <li>
                <span className="fw-bold text-muted">Release Date: </span>
                {model.release_date}
              </li>
              <li>
                <span className="fw-bold text-muted">Status: </span>
                <span className="text-success">{model.status}</span>
              </li>
              <li>
                <span className="fw-bold text-muted">Budget: </span>
                {model.budget}
              </li>
              <li>
                <span className="fw-bold text-muted">Revenue: </span>
                {model.revenue}
              </li>
            </ul>
            <Card.Title className="fw-bold" hidden>
              Top Billed Cast
            </Card.Title>
          </Card.Body>
        </Card>
      </Wrapper>
    );
  }

  return (
    <Wrapper>
      <p>No data</p>;
    </Wrapper>
  );
}

InfoSection.propTypes = {
  loading: PropTypes.bool,
  model: PropTypes.object,
};

export default InfoSection;
