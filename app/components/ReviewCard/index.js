/**
 *
 * ReviewCard
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import Skeleton from 'react-loading-skeleton';
import ContentTruncator from 'components/ContentTruncator';
import * as reviewUtils from 'utils/reviewUtils';

function ReviewCard({ loading, model }) {
  if (loading) {
    return (
      <div className="d-flex">
        <div className="flex-shrink-0 d-none" />
        <div className="flex-grow-1">
          <Skeleton className="h6 mb-0" />
          <Skeleton count={3} />
          <Skeleton wrapper="p" width="70%" />
        </div>
      </div>
    );
  }

  if (model) {
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
          <h6 className="font-monospace text-warning mb-0">{model.author}</h6>
          <ContentTruncator
            content={model.content}
            maxLength={180}
            omission="More"
          />
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
