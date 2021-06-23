/**
 *
 * MovieArticle
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import Skeleton from 'react-loading-skeleton';
import { Col, Row } from 'react-bootstrap';
import MovieDetailFrame from '../Frame';

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
    const { videos, reviews, similar, ...model } = item;
    const playerModel = {
      items: videos.results,
    };
    const reviewModel = {
      items: reviews.results,
    };
    const similarModel = {
      items: similar.results,
    };

    return (
      <Row className="g-3 py-3" as="article">
        <Col md={12} lg={8}>
          <MovieDetailFrame whoami="Player" {...playerModel} />
          <MovieDetailFrame whoami="Info" model={model} />
          <MovieDetailFrame whoami="Similar" {...similarModel} />
        </Col>
        <Col lg={4}>
          <MovieDetailFrame whoami="Review" {...reviewModel} />
        </Col>
      </Row>
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
