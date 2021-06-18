/* eslint-disable react/no-danger */
/**
 *
 * MovieArticle
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import Skeleton from 'react-loading-skeleton';
import { Button, Col, Card, Row } from 'react-bootstrap';
import Titles from 'components/Titles';
import Player from 'components/Player';
import {
  getBackdrop,
  getPoster,
  getOverview,
  getReleasedYear,
  convertRuntime,
  getVideoUrls,
} from 'utils/movieUtils';
import PersonItem from '../PersonItem';

function MovieArticle({ loading, error, item }) {
  if (loading) {
    return (
      <React.Fragment>
        <Skeleton />
        <Skeleton />
        <Skeleton />
        <Skeleton />
      </React.Fragment>
    );
  }

  if (error) {
    return <p>{error}</p>;
  }

  if (item) {
    const backdrop = getBackdrop(item.backdrop_path);
    const overview = getOverview(item.overview);
    const videoUrls = getVideoUrls(item.videos.results);

    return (
      <article className="d-grid gap-4">
        <Row>
          <Col md={12} lg={8}>
            <Player urls={videoUrls} />
            <Card
              body
              className="border-0 shadow-sm mt-4"
              bg="secondary"
              text="light"
              hidden
            >
              Comments
            </Card>
            <Row xs={3} md={4} xl={5} className="g-3 mt-4">
              {item.similar.results
                .filter((_, index) => index < 10)
                .map((titles, index) => (
                  // eslint-disable-next-line react/no-array-index-key
                  <Col key={`${titles.id}-${index}`}>
                    <Titles item={titles} />
                  </Col>
                ))}
            </Row>
          </Col>
          <Col lg={4}>
            <Card className="border-0 shadow-sm">
              <Card.Img
                src={backdrop}
                alt={item.title || item.name}
                className="rounded-0"
              />
              <Card.Body hidden>
                {item.images.posters
                  .filter((_, index) => index < 8)
                  .map((image, index) => (
                    // eslint-disable-next-line react/no-array-index-key
                    <Col key={`${image.id}-${index}`}>
                      <Card className="border-0 rounded-0">
                        <Card.Img
                          src={getPoster(image.file_path)}
                          className="rounded-0"
                        />
                      </Card>
                    </Col>
                  ))}
              </Card.Body>
              <Card.Body>
                <Card.Title
                  className="text-truncate text-success mb-0"
                  title={item.title || item.name}
                >
                  {item.title || item.name}
                </Card.Title>
                <Card.Text className="text-muted font-monospace">
                  {getReleasedYear(item.release_date)} -{' '}
                  {item.genres
                    .filter((_, index) => index < 2)
                    .map(genre => genre.name)
                    .join('/')}{' '}
                  - {convertRuntime(item.runtime)}
                </Card.Text>
              </Card.Body>
              <Card.Body className="border-top">
                <a href={item.homepage} target="_blank" className="text-muted">
                  Go to homepage
                </a>
              </Card.Body>
              <Card.Body className="border-top">
                <p hidden>{item.vote_average}</p>
                <p hidden>{item.vote_count}</p>
                <div className="d-flex justify-content-between align-items-center">
                  <p className="mb-0">
                    {item.popularity} <br />
                    <small className="text-muted">From TMDB User</small>
                  </p>
                  <div>
                    <Button
                      variant="outline-success"
                      size="sm"
                      className="me-1"
                    >
                      Like
                    </Button>
                    <Button variant="outline-secondary" size="sm">
                      Dislike
                    </Button>
                  </div>
                </div>
              </Card.Body>
              <Card.Body className="border-top">
                <p dangerouslySetInnerHTML={{ __html: overview }} />
                <ul className="list-unstyled">
                  <li>
                    <span className="fw-bold text-muted">Release Date: </span>
                    {item.release_date}
                  </li>
                  <li>
                    <span className="fw-bold text-muted">Status: </span>
                    <span className="text-success">{item.status}</span>
                  </li>
                  <li>
                    <span className="fw-bold text-muted">Budget: </span>
                    {item.budget}
                  </li>
                  <li>
                    <span className="fw-bold text-muted">Revenue: </span>
                    {item.revenue}
                  </li>
                </ul>
                <Card.Title className="fs-6 fw-bold">
                  Top Billed Cast
                </Card.Title>
                <Row xs={3} className="gx-2 gy-3">
                  {item.credits.cast
                    .filter((_, index) => index < 6)
                    .map((cast, index) => (
                      // eslint-disable-next-line react/no-array-index-key
                      <Col key={`${cast.id}-${index}`}>
                        <PersonItem item={cast} />
                      </Col>
                    ))}
                </Row>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </article>
    );
  }

  return <h1>No data yet!</h1>;
}

MovieArticle.propTypes = {
  item: PropTypes.oneOfType([PropTypes.object, PropTypes.bool]),
  error: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
  loading: PropTypes.bool,
};

export default MovieArticle;
