/**
 *
 * MultiResults
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { Col, Row } from 'react-bootstrap';
import * as searchUtils from 'utils/searchUtils';
import Titles from 'components/Titles';
import PersonItem from 'components/PersonItem';

function MultiResults({ loading, error, items }) {
  if (loading) {
    return (
      <React.Fragment>
        <Row xs={2} sm={3} md={4} lg={5} xl={6} className="gx-3 gy-5">
          {Array.from({ length: 6 })
            .map((_, index) => ({ id: index }))
            .map(person => (
              <Col key={person.id}>
                <PersonItem loading />
              </Col>
            ))}
        </Row>
        <Row xs={2} sm={3} md={4} lg={5} xl={6} className="g-3 mt-5">
          {Array.from({ length: 6 })
            .map((_, index) => ({ id: index }))
            .map(tvItem => (
              <Col key={tvItem.id}>
                <Titles loading />
              </Col>
            ))}
        </Row>
        <Row xs={2} sm={3} md={4} lg={5} xl={6} className="g-3 mt-5">
          {Array.from({ length: 6 })
            .map((_, index) => ({ id: index }))
            .map(movie => (
              <Col key={movie.id}>
                <Titles loading />
              </Col>
            ))}
        </Row>
      </React.Fragment>
    );
  }

  if (error) {
    return <p>{error}</p>;
  }

  if (items) {
    const { people, tv, movies } = searchUtils.selectionFilter(items);

    return (
      <React.Fragment>
        <Row xs={2} sm={3} md={4} lg={5} xl={6} className="gx-3 gy-5">
          {people.map(person => (
            <Col key={person.id}>
              <PersonItem item={person} />
            </Col>
          ))}
        </Row>
        <Row xs={2} sm={3} md={4} lg={5} xl={6} className="g-3 mt-5">
          {tv.map(tvItem => (
            <Col key={tvItem.id}>
              <Titles item={tvItem} />
            </Col>
          ))}
        </Row>
        <Row xs={2} sm={3} md={4} lg={5} xl={6} className="g-3 mt-5">
          {movies.map(movie => (
            <Col key={movie.id}>
              <Titles item={movie} />
            </Col>
          ))}
        </Row>
      </React.Fragment>
    );
  }

  return <p>No data now!</p>;
}

MultiResults.propTypes = {
  items: PropTypes.oneOfType([PropTypes.array, PropTypes.bool]),
  error: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
  loading: PropTypes.bool,
};

export default MultiResults;
