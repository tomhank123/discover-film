/**
 *
 * BackdropCard
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

function BackdropCard({ loading, model, details = false }) {
  const { darkMode } = useContext(ThemeContext);

  if (loading) {
    return (
      <Card
        className="border-0 shadow-sm h-100"
        bg={darkMode ? 'secondary' : 'light'}
      >
        <RatioImage loading width={16} height={9} className="rounded-3" />
        <Card.Body hidden>
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
    const backdrop = movieUtils.getBackdrop(model.backdrop_path);
    const url = isMovie
      ? movieUtils.getUrl(model.id)
      : tvUtils.getUrl(model.id);
    const year = isMovie
      ? movieUtils.getReleasedYear(model.release_date)
      : null;
    const overview = movieUtils.getOverview(model.overview);
    const title = model.title || model.name;

    return (
      <Card
        className="border-0 shadow-sm h-100 rounded-3 text-decoration-none text-reset"
        bg={darkMode ? 'secondary' : 'light'}
        as={Link}
        to={url}
      >
        <RatioImage
          src={backdrop}
          alt={title}
          width={16}
          height={9}
          fluid
          className="rounded-3"
        />
        {details && (
          <Card.Body className="d-flex flex-column">
            <h5 className="text-success mb-0">{title}</h5>
            <p className="text-muted font-monospace">{year}</p>
            {/* eslint-disable react/no-danger */}
            <p dangerouslySetInnerHTML={{ __html: overview }} />
            <div className="d-grid mt-auto">
              <Button
                size="sm"
                variant="outline-secondary"
                title="Add to My List"
              >
                Add to My List
              </Button>
            </div>
          </Card.Body>
        )}
      </Card>
    );
  }

  return null;
}

BackdropCard.propTypes = {
  loading: PropTypes.bool,
  model: PropTypes.object,
  details: PropTypes.bool,
};

export default BackdropCard;
