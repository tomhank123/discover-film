/**
 *
 * TvArticle
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { Col, Row } from 'react-bootstrap';
import Skeleton from 'react-loading-skeleton';
import Section from '../Section';

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
      <Row className="g-3" as="article">
        <Col md={12} lg={8}>
          <Section whoami="player" {...playerModel} />
          <Section whoami="info" model={model} />
          <Section whoami="similar" {...similarModel} />
        </Col>
        <Col lg={4}>
          <Section whoami="review" {...reviewModel} />
        </Col>
      </Row>
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
