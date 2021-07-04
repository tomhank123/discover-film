/**
 *
 * InfoFrame
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { Card } from 'react-bootstrap';
import Skeleton from 'react-loading-skeleton';
import Wrapper from './Wrapper';
import MovieInfo from './MovieInfo';
import TvInfo from './TvInfo';

function InfoFrame({ loading, model }) {
  if (loading) {
    return (
      <Wrapper>
        <Card className="border-0 shadow-sm rounded-0">
          <Card.Body>
            <Skeleton wrapper="h5" width="120px" />
            <Skeleton wrapper="p" width="200px" />
            <Skeleton count={3} className="" />
            <Skeleton width="70%" />
            <ul className="list-unstyled mb-0 mt-3">
              <li>
                <Skeleton width="80px" /> <Skeleton width="150px" />
              </li>
              <li>
                <Skeleton width="80px" /> <Skeleton width="150px" />
              </li>
              <li>
                <Skeleton width="80px" /> <Skeleton width="150px" />
              </li>
              <li>
                <Skeleton width="80px" /> <Skeleton width="150px" />
              </li>
            </ul>
          </Card.Body>
        </Card>
      </Wrapper>
    );
  }

  if (model) {
    const isMovie = !!model.title;

    return (
      <Wrapper>
        <Card className="border-0 shadow-sm rounded-0">
          {isMovie ? <MovieInfo model={model} /> : <TvInfo model={model} />}
        </Card>
      </Wrapper>
    );
  }

  return (
    <Wrapper>
      <p>No data</p>;
    </Wrapper>
  );
}

InfoFrame.propTypes = {
  loading: PropTypes.bool,
  model: PropTypes.object,
};

export default InfoFrame;
