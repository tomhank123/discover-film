/**
 *
 * ReviewCard
 *
 */

import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Button } from 'react-bootstrap';
import * as reviewUtils from 'utils/reviewUtils';
import * as commonUtils from 'utils/commonUtils';

function ReviewCard({ loading, model }) {
  const [showMore, setShowMore] = useState(false);

  if (loading) {
    return null;
  }

  if (model) {
    const brief = reviewUtils.getBrief(model.content);
    const content = reviewUtils.getContent(model.content);
    const isEqual = brief.length === content.length;

    return (
      <div className="d-flex">
        <div className="flex-shrink-0 d-none">
          <img
            src={reviewUtils.getAvatar(model.author_details.avatar_path)}
            alt={model.author}
            width={50}
          />
        </div>
        <div className="flex-grow-1">
          <h6 className="font-monospace text-success mb-0">{model.author}</h6>
          {showMore ? (
            /* eslint-disable react/no-danger */
            <p dangerouslySetInnerHTML={commonUtils.createMarkup(content)} />
          ) : (
            <p>
              {brief}
              <Button
                hidden={isEqual}
                variant="link"
                size="sm"
                className="p-0 text-reset"
                onClick={() => setShowMore(!showMore)}
              >
                More
              </Button>
            </p>
          )}
        </div>
      </div>
    );
  }

  return null;
}

ReviewCard.propTypes = {
  model: PropTypes.object,
  loading: PropTypes.bool,
};

export default ReviewCard;
