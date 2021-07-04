/**
 *
 * ReviewFrame
 *
 */

import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Skeleton from 'react-loading-skeleton';
import { Button, Card } from 'react-bootstrap';
import * as reviewUtils from 'utils/reviewUtils';
import ReviewCard from 'components/ReviewCard';
import Wrapper from './Wrapper';

function ReviewFrame({ loading, items }) {
  const [showMore, setShowMore] = useState(false);
  const itemsPerPage = reviewUtils.getItemsPerPage();

  if (loading) {
    return (
      <Wrapper>
        <Card className="border-0 shadow-sm">
          <Card.Header>
            <Skeleton width={32} /> Comment(s)
          </Card.Header>
          <Card.Body>
            {Array.from({ length: 2 })
              .map((_, index) => index)
              .map(review => (
                <ReviewCard key={review} loading={loading} />
              ))}
          </Card.Body>
        </Card>
      </Wrapper>
    );
  }

  if (items && items.length) {
    const limitedItems = items.slice(0, itemsPerPage);
    const reviewsToShow = showMore ? items : limitedItems;

    return (
      <Wrapper>
        <Card className="border-0 shadow-sm">
          <Card.Header>{items.length} Comment(s)</Card.Header>
          <Card.Body>
            {reviewsToShow.map(review => (
              <ReviewCard key={review.id} loading={loading} model={review} />
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
      </Wrapper>
    );
  }

  return (
    <Wrapper>
      <Card className="border-0 shadow-sm">
        <Card.Header>0 Comment(s)</Card.Header>
        <Card.Body>No comment yet!</Card.Body>
      </Card>
    </Wrapper>
  );
}

ReviewFrame.propTypes = {
  items: PropTypes.array,
  loading: PropTypes.bool,
};

export default ReviewFrame;
