/**
 *
 * ContentTruncator
 *
 */

import React, { useState } from 'react';
import PropTypes from 'prop-types';
import truncate from 'lodash/truncate';
import { Button } from 'react-bootstrap';
import * as commonUtils from 'utils/commonUtils';

function ContentTruncator({ content, maxLength }) {
  const [showMore, setShowMore] = useState(false);
  const brief = truncate(content, {
    length: maxLength,
  });
  const isEqual = content.length === brief.length;

  return (
    <React.Fragment>
      {!showMore ? (
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
      ) : (
        /* eslint-disable react/no-danger */
        <p dangerouslySetInnerHTML={commonUtils.createMarkup(content)} />
      )}
    </React.Fragment>
  );
}

ContentTruncator.propTypes = {
  content: PropTypes.string.isRequired,
  maxLength: PropTypes.number.isRequired,
};

export default ContentTruncator;
