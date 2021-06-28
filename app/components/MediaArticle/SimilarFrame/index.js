/**
 *
 * SimilarFrame
 *
 */

import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Skeleton from 'react-loading-skeleton';
import { Button, Row, Col } from 'react-bootstrap';
import MediaCard from 'containers/MediaCard';
import Wrapper from './Wrapper';

function SimilarFrame({ loading, items }) {
  const [showMore, setShowMore] = useState(false);

  if (loading) {
    return (
      <Wrapper>
        <Skeleton className="h5 mb-3" width="120px" />
        <Row xs={1} sm={2} lg={3} className="g-3">
          {Array.from({ length: 6 })
            .map((_, index) => index)
            .map(titles => (
              <Col key={titles}>
                <MediaCard whoami="Backdrop" loading details />
              </Col>
            ))}
        </Row>
      </Wrapper>
    );
  }

  if (items && items.length) {
    const limitedItems = items.slice(0, 6);
    const itemsToShow = showMore ? items : limitedItems;

    return (
      <Wrapper>
        <h5 className="fw-bold mb-3">More Like This</h5>
        <Row xs={1} sm={2} lg={3} className="g-3">
          {itemsToShow.map((titles, index) => (
            // eslint-disable-next-line react/no-array-index-key
            <Col key={`${titles.id}-${index}`}>
              <MediaCard whoami="Backdrop" model={titles} details />
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

SimilarFrame.propTypes = {
  items: PropTypes.array,
  loading: PropTypes.bool,
};

export default SimilarFrame;
