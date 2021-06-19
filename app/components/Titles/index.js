/**
 *
 * Titles
 *
 */

import { ThemeContext } from 'context/theme-context';
import PropTypes from 'prop-types';
import React, { useContext } from 'react';
import { Button, Card } from 'react-bootstrap';
import { FormattedMessage } from 'react-intl';
import Skeleton from 'react-loading-skeleton';
import { Link } from 'react-router-dom';
import * as movieUtils from 'utils/movieUtils';
import * as tvUtils from 'utils/tvUtils';
import RatioImage from 'components/RatioImage';
import messages from './messages';

function Titles({ loading, item }) {
  const { darkMode } = useContext(ThemeContext);

  if (loading) {
    return (
      <Card
        className="border-0 shadow-sm h-100"
        bg={darkMode ? 'secondary' : 'light'}
      >
        <RatioImage height={3} width={2} loading className="rounded-3" />
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

  if (item) {
    const isMovie = item.title;
    const poster = movieUtils.getPoster(item.poster_path);
    const url = isMovie ? movieUtils.getUrl(item.id) : tvUtils.getUrl(item.id);
    const title = item.title || item.name;

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
        <Card.Body hidden>Body</Card.Body>
      </Card>
    );
  }

  return null;
}

Titles.propTypes = {
  loading: PropTypes.bool,
  item: PropTypes.object,
};

export default Titles;
