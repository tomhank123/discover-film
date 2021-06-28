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
  const makeStyles = {
    bg: darkMode ? 'dark' : 'light',
    thumb: {
      bg: darkMode ? 'bg-secondary' : '',
      borderColor: darkMode ? 'border-secondary' : '',
    },
  };

  if (loading) {
    return (
      <Card className="border-0 shadow" bg={makeStyles.bg}>
        <Card.Body className="text-center">
          <Figure className="w-75 rounded-circle">
            <RatioImage loading className="rounded-circle" />
          </Figure>
          <Skeleton wrapper="h5" />
          <Skeleton wrapper="p" width="75%" />
          <div className="d-grid gap-2">
            <Button variant="outline-secondary" size="sm">
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
      <Card className="border-0 shadow" bg={makeStyles.bg}>
        <Card.Body className="text-center">
          <Figure className="w-75 rounded-circle">
            <RatioImage
              src={poster}
              alt={item.name}
              className={`rounded-circle ${makeStyles.thumb.bg} ${
                makeStyles.thumb.borderColor
              }`}
              thumbnail
            />
          </Figure>
          <Card.Title
            className="text-truncate mb-0 text-warning"
            title={item.name}
          >
            {item.name}
          </Card.Title>
          <Card.Text className="font-monospace text-secondary">
            {item.known_for_department}
          </Card.Text>
          <Card.Text className="small m-0" hidden>
            {item.popularity}
          </Card.Text>
          <div className="d-grid gap-2">
            <Button variant="outline-secondary" size="sm" as={Link} to={url}>
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
