/**
 *
 * PosterCard
 *
 */

import { ThemeContext } from 'context/theme-context';
import PropTypes from 'prop-types';
import React, { useContext } from 'react';
import { Button, Card } from 'react-bootstrap';
import { FormattedMessage } from 'react-intl';
import { Link } from 'react-router-dom';
import * as movieUtils from 'utils/movieUtils';
import * as tvUtils from 'utils/tvUtils';
import RatioImage from 'components/RatioImage';
import messages from '../messages';

function PosterCard({ loading, model, details = false }) {
  const { darkMode } = useContext(ThemeContext);

  if (loading) {
    return (
      <Card
        className="border-0 shadow-sm h-100"
        bg={darkMode ? 'secondary' : 'light'}
      >
        <RatioImage height={3} width={2} loading className="rounded-3" />
        <Card.Body hidden={!details}>
          <div className="d-grid gap-2">
            <Button variant={darkMode ? 'dark' : 'secondary'} size="sm">
              <FormattedMessage {...messages.watchNow} />
            </Button>
            <Button
              variant={darkMode ? 'outline-dark' : 'outline-secondary'}
              size="sm"
            >
              <FormattedMessage {...messages.watchList} />
            </Button>
          </div>
        </Card.Body>
      </Card>
    );
  }

  if (model) {
    const isMovie = model.title;
    const poster = movieUtils.getPoster(model.poster_path);
    const url = isMovie
      ? movieUtils.getUrl(model.id)
      : tvUtils.getUrl(model.id);
    const title = model.title || model.name;

    return (
      <Card
        className="border-0 shadow-sm h-100 rounded-3"
        bg={darkMode ? 'secondary' : 'light'}
        as={Link}
        to={url}
      >
        <RatioImage
          src={poster}
          alt={title}
          height={3}
          width={2}
          className="rounded-3"
        />
        {details && <Card.Body>Body</Card.Body>}
      </Card>
    );
  }

  return null;
}

PosterCard.propTypes = {
  loading: PropTypes.bool,
  model: PropTypes.object,
  details: PropTypes.bool,
};

export default PosterCard;
