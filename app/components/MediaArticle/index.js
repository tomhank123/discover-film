/**
 *
 * MediaArticle
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { Col, Row } from 'react-bootstrap';
import InfoFrame from './InfoFrame';
import PlayerFrame from './PlayerFrame';
import SimilarFrame from './SimilarFrame';
import ReviewFrame from './ReviewFrame';

function MediaArticle({ loading, error, item }) {
  if (loading) {
    return (
      <Row className="g-3 py-3" as="article">
        <Col md={12} lg={8}>
          <PlayerFrame loading />
          <InfoFrame loading />
          <SimilarFrame loading />
        </Col>
        <Col lg={4}>
          <ReviewFrame loading />
        </Col>
      </Row>
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
          <PlayerFrame {...playerModel} />
          <InfoFrame model={model} />
          <SimilarFrame {...similarModel} />
        </Col>
        <Col lg={4}>
          <ReviewFrame {...reviewModel} />
        </Col>
      </Row>
    );
  }

  return <h1>No data yet!</h1>;
}

MediaArticle.propTypes = {
  item: PropTypes.oneOfType([PropTypes.object, PropTypes.bool]),
  error: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
  loading: PropTypes.bool,
};

export default MediaArticle;
