/**
 *
 * InfoFrame
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import Wrapper from './Wrapper';
import MovieInfo from './MovieInfo';
import TvInfo from './TvInfo';

function InfoFrame({ loading, model }) {
  if (loading) {
    return (
      <Wrapper>
        <p>Loading...</p>
      </Wrapper>
    );
  }

  if (model) {
    const isMovie = !!model.title;

    return (
      <Wrapper>
        {isMovie ? <MovieInfo model={model} /> : <TvInfo model={model} />}
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
