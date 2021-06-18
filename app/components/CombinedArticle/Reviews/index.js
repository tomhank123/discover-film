/* eslint-disable react/no-danger */
/**
 *
 * Reviews
 *
 */

import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Button, Card, Form } from 'react-bootstrap';
import * as reviewUtils from 'utils/reviewUtils';

function Reviews({ loading, error, items }) {
  const [showMore, setShowMore] = useState(false);

  if (loading) {
    return null;
  }

  if (error) {
    return null;
  }

  if (items && items.length) {
    const limitedItems = items.slice(0, 2);
    const reviewsToShow = showMore ? items : limitedItems;

    return (
      <Card body className="border-0">
        <h5>{items.length} Comments</h5>
        <Form className="mb-3">
          <Form.Control
            as="textarea"
            rows={2}
            placeholder="Commenting publicly as Duc Tran"
          />
        </Form>
        {reviewsToShow.map(review => (
          <div className="d-flex" key={review.id}>
            <div className="flex-shrink-0 d-none">
              <img
                src={reviewUtils.getAvatar(review.author_details.avatar_path)}
                alt={review.author}
                width={50}
              />
            </div>
            <div className="flex-grow-1">
              <h5 className="font-monospace mt-0 mb-1">@{review.author}</h5>
              <p
                dangerouslySetInnerHTML={{
                  __html: reviewUtils.getContent(review.content),
                }}
              />
            </div>
          </div>
        ))}
        <div className="d-grid">
          <Button
            hidden={items.length === 2}
            variant="outline-secondary"
            onClick={() => setShowMore(!showMore)}
          >
            Show {showMore ? 'Less' : 'More'}
          </Button>
        </div>
      </Card>
    );
  }

  return <p>No data </p>;
}

Reviews.propTypes = {
  items: PropTypes.array,
  error: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
  loading: PropTypes.bool,
};

export default Reviews;
