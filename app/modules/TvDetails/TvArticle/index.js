/* eslint-disable react/no-danger */
/**
 *
 * TvArticle
 *
 */

import Titles from 'components/Titles';
import PropTypes from 'prop-types';
import React from 'react';
import { Button, Card, Col, Row } from 'react-bootstrap';
import Skeleton from 'react-loading-skeleton';
import Player from 'components/Player';
import Reviews from 'components/CombinedArticle/Reviews';
import * as tvUtils from 'utils/tvUtils';
import PersonItem from '../PersonItem';

function TvArticle({ loading, error, item }) {
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
    const overview = tvUtils.getOverview(item.overview);
    const videoUrls = tvUtils.getVideoUrls(item.videos.results);
    const reviews = {
      loading,
      error,
      items: item.reviews.results,
    };

    return (
      <article className="d-grid gap-4">
        <Row>
          <Col md={12} lg={8}>
            <Player url={videoUrls} />
            <Card className="border-0 rounded-0">
              <Card.Body>
                <Card.Title
                  className="text-truncate text-success mb-0"
                  title={item.title || item.name}
                >
                  {item.title || item.name}
                </Card.Title>
                <Card.Text className="text-muted font-monospace">
                  {item.genres
                    .filter((_, index) => index < 2)
                    .map(genre => genre.name)
                    .join('/')}
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
              </Card.Body>
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
            <Reviews {...reviews} />
          </Col>
        </Row>
      </article>
    );
  }

  return <h1>No data yet!</h1>;
}

TvArticle.propTypes = {
  item: PropTypes.oneOfType([PropTypes.object, PropTypes.bool]),
  error: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
  loading: PropTypes.bool,
};

export default TvArticle;
