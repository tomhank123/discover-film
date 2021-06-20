/**
 *
 * SimilarSection
 *
 */

import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Button, Row, Col } from 'react-bootstrap';
import MovieCard from 'components/MovieCard';
import Wrapper from './Wrapper';

function SimilarSection({ loading, items }) {
  const [showMore, setShowMore] = useState(false);

  if (loading) {
    return (
      <Wrapper>
        <p>Loading...</p>
      </Wrapper>
    );
  }

  if (items && items.length) {
    const limitedItems = items.slice(0, 6);
    const itemsToShow = showMore ? items : limitedItems;

    return (
      <Wrapper>
        <h5 className="fw-bold mt-4">More Like This</h5>
        <Row xs={1} sm={2} lg={3} className="g-3">
          {itemsToShow.map((titles, index) => (
            // eslint-disable-next-line react/no-array-index-key
            <Col key={`${titles.id}-${index}`}>
              <MovieCard whoami="backdrop" model={titles} details />
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
      </Wrapper>
    );
  }

  return (
    <Wrapper>
      <p>No data </p>
    </Wrapper>
  );
}

SimilarSection.propTypes = {
  items: PropTypes.array,
  loading: PropTypes.bool,
};

export default SimilarSection;
