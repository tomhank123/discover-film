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
          <Card.Title className="display-4 fw-bold">Welcome.</Card.Title>
          <Card.Text className="lead">
            Millions of movies, TV shows and Card.Texteople to discover. Explore
            now.
          </Card.Text>
        </Card.Body>
      </Container>
    </Card>
  );
}

Jumbotron.propTypes = {};

export default Jumbotron;
