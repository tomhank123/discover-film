/**
 *
 * PersonList
 *
 */

import PersonCard from 'components/PersonCard';
import PropTypes from 'prop-types';
import React from 'react';
import { Col, Row } from 'react-bootstrap';

function PersonList({ loading, error, items }) {
  if (loading) {
    return (
      <Row sm={2} md={3} lg={4} xl={5} className="g-3">
        {Array.from({ length: 20 }, (_, i) => i).map(item => (
          <Col key={item}>
            <PersonCard variant="Avatar" loading />
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
            <PersonCard variant="Avatar" item={item} />
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
