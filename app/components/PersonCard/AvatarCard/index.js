/**
 *
 * AvatarCard
 *
 */

import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Skeleton from 'react-loading-skeleton';
import { FormattedMessage } from 'react-intl';
import { Card, Button, Figure } from 'react-bootstrap';
import * as personUtils from 'utils/personUtils';
import { ThemeContext } from 'context/theme-context';
import RatioImage from 'components/RatioImage';
import messages from '../messages';

function AvatarCard({ loading, item }) {
  const { darkMode } = useContext(ThemeContext);

  if (loading) {
    return (
      <Card className="border-0 shadow" bg={darkMode ? 'secondary' : 'light'}>
        <Card.Body className="text-center">
          <Figure className="w-75 rounded-circle">
            <RatioImage loading className="rounded-circle" />
          </Figure>
          <Skeleton wrapper="h5" />
          <Skeleton wrapper="p" width="75%" />
          <div className="d-grid gap-2">
            <Button
              variant={darkMode ? 'outline-light' : 'outline-secondary'}
              size="sm"
            >
              <FormattedMessage {...messages.moreInfo} />
            </Button>
          </div>
        </Card.Body>
      </Card>
    );
  }

  if (item) {
    const poster = personUtils.getPoster(item.profile_path);
    const url = personUtils.getUrl(item.id);

    return (
      <Card className="border-0 shadow" bg={darkMode ? 'secondary' : 'light'}>
        <Card.Body className="text-center">
          <Figure className="w-75 rounded-circle">
            <RatioImage
              src={poster}
              alt={item.name}
              className="rounded-circle"
              thumbnail
            />
          </Figure>
          <Card.Title
            className={`text-truncate mb-0 ${
              darkMode ? 'text-warning' : 'text-success'
            }`}
            title={item.name}
          >
            {item.name}
          </Card.Title>
          <Card.Text
            className={`font-monospace ${
              darkMode ? 'text-light' : 'text-muted'
            }`}
          >
            {item.known_for_department}
          </Card.Text>
          <Card.Text className="small m-0" hidden>
            {item.popularity}
          </Card.Text>
          <div className="d-grid gap-2">
            <Button
              variant={darkMode ? 'outline-light' : 'outline-secondary'}
              size="sm"
              as={Link}
              to={url}
            >
              <FormattedMessage {...messages.moreInfo} />
            </Button>
          </div>
        </Card.Body>
      </Card>
    );
  }

  return null;
}

AvatarCard.propTypes = {
  loading: PropTypes.bool,
  item: PropTypes.object,
};

export default AvatarCard;
