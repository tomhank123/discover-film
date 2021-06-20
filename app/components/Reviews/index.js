/**
 *
 * Reviews
 *
 */

import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Button, Card } from 'react-bootstrap';
import * as reviewUtils from 'utils/reviewUtils';
import ReviewItem from './ReviewItem';

function Reviews({ loading, error, items }) {
  const itemsPerPage = reviewUtils.getItemsPerPage();
  const [showMore, setShowMore] = useState(false);

  if (loading) {
    return null;
  }

  if (error) {
    return null;
  }

  if (items && items.length) {
    const limitedItems = items.slice(0, itemsPerPage);
    const reviewsToShow = showMore ? items : limitedItems;

    return (
      <Card className="border-0 shadow-sm">
        <Card.Header className="bg-white">
          {items.length} Comment(s)
        </Card.Header>
        <Card.Body>
          {reviewsToShow.map(review => (
            <ReviewItem key={review.id} loading={loading} model={review} />
          ))}
          <div className="d-grid">
            <Button
              hidden={items.length <= itemsPerPage}
              variant="outline-secondary"
              onClick={() => setShowMore(!showMore)}
            >
              Show {showMore ? 'Less' : 'More'}
            </Button>
          </div>
        </Card.Body>
      </Card>
    );
  }

  return (
    <Card className="border-0 shadow-sm">
      <Card.Header className="bg-white">0 Comment(s)</Card.Header>
      <Card.Body>No comment yet!</Card.Body>
    </Card>
  );
}

Reviews.propTypes = {
  items: PropTypes.array,
  error: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
  loading: PropTypes.bool,
};

export default Reviews;
