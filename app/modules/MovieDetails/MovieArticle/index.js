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
import * as movieUtils from 'utils/movieUtils';
import Player from 'components/Player';
import Reviews from 'components/CombinedArticle/Reviews';
import SimilarItems from 'components/CombinedArticle/SimilarItems';
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
    const overview = movieUtils.getOverview(item.overview);
    const videoUrls = movieUtils.getVideoUrls(item.videos.results);
    const reviews = {
      loading,
      error,
      items: item.reviews.results,
    };
    const similarItems = {
      loading,
      error,
      items: item.similar.results,
    };

    return (
      <article>
        <Row className="g-3">
          <Col md={12} lg={8}>
            <Player urls={videoUrls} />
            <Card className="border-0 shadow-sm rounded-0">
              <Card.Body>
                <Card.Title
                  className="text-truncate text-success mb-0"
                  title={item.title || item.name}
                >
                  {item.title || item.name}
                </Card.Title>
                <Card.Text className="text-muted font-monospace">
                  {movieUtils.getReleasedYear(item.release_date)} -{' '}
                  {item.genres
                    .filter((_, index) => index < 2)
                    .map(genre => genre.name)
                    .join('/')}{' '}
                  - {movieUtils.convertRuntime(item.runtime)}
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
                <Card.Title className="fw-bold" hidden>
                  Top Billed Cast
                </Card.Title>
                <Row xs={5} className="gx-2 gy-3" hidden>
                  {item.credits.cast
                    .filter((_, index) => index < 10)
                    .map((cast, index) => (
                      // eslint-disable-next-line react/no-array-index-key
                      <Col key={`${cast.id}-${index}`}>
                        <PersonItem item={cast} />
                      </Col>
                    ))}
                </Row>
              </Card.Body>
            </Card>
            <SimilarItems {...similarItems} />
          </Col>
          <Col lg={4}>
            <Reviews {...reviews} />
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
