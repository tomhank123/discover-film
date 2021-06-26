/**
 *
 * Poster
 *
 */

import { ThemeContext } from 'context/theme-context';
import PropTypes from 'prop-types';
import React, { useContext } from 'react';
import { Button, Card } from 'react-bootstrap';
import { FormattedMessage } from 'react-intl';
import { Link } from 'react-router-dom';
import * as mediaUtils from 'utils/mediaUtils';
import RatioImage from 'components/RatioImage';
import messages from '../messages';

function Poster({ loading, model, details = false, onOpenModal }) {
  const { darkMode } = useContext(ThemeContext);
  const makeStyles = {
    bg: darkMode ? 'dark' : 'white',
  };

  if (loading) {
    return (
      <Card className="border-0 shadow-sm h-100 rounded-3" bg={makeStyles.bg}>
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
    const { poster, url, title } = mediaUtils.renderedMedia(model);

    return (
      <Card
        className="border-0 shadow-sm h-100 rounded-3"
        bg={makeStyles.bg}
        as={Link}
        to={url}
        onClick={() => onOpenModal(model.id)}
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

Poster.propTypes = {
  loading: PropTypes.bool,
  model: PropTypes.object,
  details: PropTypes.bool,
  onOpenModal: PropTypes.func,
};

export default Poster;
