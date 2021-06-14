/**
 *
 * PersonList
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import Skeleton from 'react-loading-skeleton';
import { Card, Col, Figure, Row, Button } from 'react-bootstrap';
import PersonItem from 'components/PersonItem';

function PersonList({ loading, error, items }) {
  if (loading) {
    return (
      <Row sm={2} md={3} lg={4} xl={5} className="g-3">
        {Array.from({ length: 20 }, (_, i) => i).map(item => (
          <Col key={item}>
            <Card className="border-0 shadow">
              <Card.Body className="text-center">
                <Figure className="w-75">
                  <Skeleton width={120} height={120} circle />
                </Figure>
                <Skeleton wrapper="h5" width={150} />
                <Skeleton wrapper="p" width={80} />
                <div className="d-grid gap-2">
                  <Button variant="outline-secondary" size="sm">
                    More Info
                  </Button>
                </div>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    );
  }

  if (error) {
    return <p>{error}</p>;
  }

  if (items) {
    return (
      <Row sm={2} md={3} lg={4} xl={5} className="g-3">
        {items.map(item => (
          <Col key={item.id}>
            <PersonItem item={item} />
          </Col>
        ))}
      </Row>
    );
  }

  return <h1>No data yet!</h1>;
}

PersonList.propTypes = {
  items: PropTypes.oneOfType([PropTypes.array, PropTypes.bool]),
  error: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
  loading: PropTypes.bool,
};

export default PersonList;
