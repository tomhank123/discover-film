/**
 *
 * Jumbotron
 *
 */

import React from 'react';
// import PropTypes from 'prop-types';
import { Card, Container } from 'react-bootstrap';

function Jumbotron() {
  return (
    <Card bg="secondary" className="rounded-0" text="light">
      <Container>
        <Card.Body className="px-0 py-5">
          <h1 className="display-4 font-weight-bold">Welcome.</h1>
          <p className="lead">
            Millions of movies, TV shows and people to discover. Explore now.
          </p>
        </Card.Body>
      </Container>
    </Card>
  );
}

Jumbotron.propTypes = {};

export default Jumbotron;
