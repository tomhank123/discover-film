/**
 *
 * ReviewFrame
 *
 */

import React, { useState, useContext } from 'react';
import PropTypes from 'prop-types';
import { Button, Card } from 'react-bootstrap';
import { ThemeContext } from 'context/theme-context';
import * as reviewUtils from 'utils/reviewUtils';
import ReviewCard from 'components/ReviewCard';
import Wrapper from './Wrapper';

function ReviewFrame({ loading, items }) {
  const [showMore, setShowMore] = useState(false);
  const { darkMode } = useContext(ThemeContext);
  const itemsPerPage = reviewUtils.getItemsPerPage();
  const makeStyles = {
    bg: darkMode ? 'dark' : 'white',
  };

  if (loading) {
    return (
      <Wrapper>
        <p>Loading...</p>
      </Wrapper>
    );
  }

  if (items && items.length) {
    const limitedItems = items.slice(0, itemsPerPage);
    const reviewsToShow = showMore ? items : limitedItems;

    return (
      <Wrapper>
        <Card className="border-0 shadow-sm" bg={makeStyles.bg}>
          <Card.Header bg={makeStyles.bg}>
            {items.length} Comment(s)
          </Card.Header>
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
      <Card className="border-0 shadow-sm" bg={makeStyles.bg}>
        <Card.Header bg={makeStyles.bg}>0 Comment(s)</Card.Header>
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
