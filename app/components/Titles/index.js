/**
 *
 * Titles
 *
 */

import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Skeleton from 'react-loading-skeleton';
import { FormattedMessage } from 'react-intl';
import { Card, Button } from 'react-bootstrap';
import * as movieUtils from 'utils/movieUtils';
import * as tvUtils from 'utils/tvUtils';
import { ThemeContext } from 'context/theme-context';
import StyledPoster from './StyledPoster';
import messages from './messages';

function Titles({ loading, item }) {
  const { darkMode } = useContext(ThemeContext);

  if (loading) {
    return (
      <Card
        className="border-0 shadow-sm h-100"
        bg={darkMode ? 'secondary' : 'light'}
      >
        <Skeleton
          wrapper="div"
          style={{
            paddingTop: '150%',
          }}
        />
        <Card.Body>
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
        className="border-0 shadow-sm h-100"
        bg={darkMode ? 'secondary' : 'light'}
      >
        <StyledPoster poster={poster} fallback={title} />
        <Card.Body>
          <div className="d-grid gap-2">
            <Button
              variant={darkMode ? 'dark' : 'secondary'}
              size="sm"
              as={Link}
              to={url}
            >
              <FormattedMessage {...messages.watchNow} />
            </Button>
            <Button
              variant={darkMode ? 'outline-dark' : 'outline-secondary'}
              size="sm"
              as={Link}
              to={url}
            >
              <FormattedMessage {...messages.watchList} />
            </Button>
          </div>
        </Card.Body>
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
