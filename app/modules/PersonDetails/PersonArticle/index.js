/**
 *
 * PersonArticle
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import Skeleton from 'react-loading-skeleton';
import { Row, Col, Card, Button } from 'react-bootstrap';
import MovieCard from 'components/MovieCard';
import * as personUtils from 'utils/personUtils';
import * as commonUtils from 'utils/commonUtils';

function PersonArticle({ loading, error, item }) {
  if (loading) {
    return (
      <article className="d-grid gap-4">
        <Row>
          <Col md={12} lg={8} className="order-1 order-lg-0">
            <Skeleton />
          </Col>
          <Col>
            <Skeleton />
          </Col>
        </Row>
        <Skeleton />
      </article>
    );
  }

  if (error) {
    return <p>{error}</p>;
  }

  if (item) {
    const biography = personUtils.getBio(item.biography);

    return (
      <article className="d-grid gap-4">
        <Row>
          <Col md={12} lg={8} className="order-1 order-lg-0">
            <Row xs={3} md={4} lg={4} xl={5} className="g-3">
              {item.known_for.map((titles, index) => (
                // eslint-disable-next-line react/no-array-index-key
                <Col key={`${titles.id}-${index}`}>
                  <MovieCard model={titles} />
                </Col>
              ))}
            </Row>
          </Col>
          <Col>
            <Card className="border-0 shadow-sm">
              <Card.Body>
                <Row xs={4} className="g-1">
                  {item.images.profiles
                    .filter((_, index) => index < 8)
                    .map((image, index) => (
                      // eslint-disable-next-line react/no-array-index-key
                      <Col key={`${image.id}-${index}`}>
                        <Card className="border-0 rounded-0">
                          <Card.Img
                            src={personUtils.getPoster(image.file_path)}
                            className="rounded-0"
                          />
                        </Card>
                      </Col>
                    ))}
                </Row>
              </Card.Body>
              <Card.Body>
                <Card.Title
                  className="text-truncate text-success mb-0"
                  title={item.name}
                >
                  {item.name}
                </Card.Title>
                <Card.Text className="text-muted font-monospace">
                  {item.known_for_department}
                </Card.Text>
                <div>
                  <Button
                    variant="outline-secondary"
                    size="sm"
                    className="mx-1"
                  >
                    Share
                  </Button>
                  <Button variant="success" size="sm" className="mx-1">
                    + Follow me
                  </Button>
                </div>
              </Card.Body>
              <Card.Body className="border-top">
                {/* eslint-disable react/no-danger */}
                <p
                  dangerouslySetInnerHTML={commonUtils.createMarkup(biography)}
                />
                <ul className="list-unstyled">
                  <li>
                    <span className="fw-bold text-muted">Known Credits: </span>
                    {item.known_for.length}
                  </li>
                  <li>
                    <span className="fw-bold text-muted">Gender: </span>
                    {item.gender === 2 ? 'Male' : 'Female'}
                  </li>
                  <li>
                    <span className="fw-bold text-muted">Birthday: </span>
                    {item.birthday}
                  </li>
                  <li>
                    <span className="fw-bold text-muted">Place of birth: </span>
                    {item.place_of_birth}
                  </li>
                  <li>
                    <span className="fw-bold text-muted">Also known as: </span>
                    {item.also_known_as.join(', ')}
                  </li>
                </ul>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </article>
    );
  }

  return null;
}

PersonArticle.propTypes = {
  item: PropTypes.oneOfType([PropTypes.object, PropTypes.bool]),
  error: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
  loading: PropTypes.bool,
};

export default PersonArticle;
