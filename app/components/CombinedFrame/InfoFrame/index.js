/**
 *
 * InfoFrame
 *
 */

import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { Card } from 'react-bootstrap';
import { ThemeContext } from 'context/theme-context';
import Wrapper from './Wrapper';
import MovieInfo from './MovieInfo';
import TvInfo from './TvInfo';

function InfoFrame({ loading, model }) {
  const { darkMode } = useContext(ThemeContext);
  const makeStyles = {
    bg: darkMode ? 'dark' : 'white',
  };

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
        <Card className="border-0 shadow-sm rounded-0" bg={makeStyles.bg}>
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
