/* eslint-disable react/no-danger */
/**
 *
 * Reviews
 *
 */

import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Button, Row, Col } from 'react-bootstrap';
import Titles from '../Titles';

function Reviews({ loading, error, items }) {
  const [showMore, setShowMore] = useState(false);

  if (loading) {
    return null;
  }

  if (error) {
    return null;
  }

  if (items && items.length) {
    const limitedItems = items.slice(0, 6);
    const itemsToShow = showMore ? items : limitedItems;

    return (
      <section>
        <h5 className="fw-bold mt-4">More Like This</h5>
        <Row xs={1} sm={2} lg={3} className="g-3">
          {itemsToShow.map((titles, index) => (
            // eslint-disable-next-line react/no-array-index-key
            <Col key={`${titles.id}-${index}`}>
              <Titles item={titles} />
            </Col>
          ))}
        </Row>
        <div className="d-grid mt-3">
          <Button
            hidden={items.length === 6}
            variant="outline-secondary"
            onClick={() => setShowMore(!showMore)}
          >
            Show {showMore ? 'Less' : 'More'}
          </Button>
        </div>
      </section>
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
