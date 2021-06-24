/**
 *
 * Collections
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { Swiper, SwiperSlide } from 'swiper/react';
import Skeleton from 'react-loading-skeleton';

import { Alert } from 'react-bootstrap';
import MovieCard from 'containers/MovieCard';
import swiperOptions from './config';
import MovieList from './MovieList';
import Wrapper from './Wrapper';

function Collections({ loading, error, items, isSwiper = false }) {
  if (loading) {
    return (
      <Wrapper>
        {[1, 2, 3, 4, 5, 6].map(id => (
          <section key={id}>
            <Skeleton wrapper="h5" width={250} />
            {isSwiper ? (
              <Swiper {...swiperOptions}>
                {[7, 8, 9, 10, 11, 12, 13, 14, 15].map(childId => (
                  <SwiperSlide key={childId}>
                    <MovieCard loading={loading} />
                  </SwiperSlide>
                ))}
              </Swiper>
            ) : (
              <MovieList>
                {[7, 8, 9, 10, 11, 12, 13, 14, 15].map(childId => (
                  <MovieCard key={childId} loading />
                ))}
              </MovieList>
            )}
          </section>
        ))}
      </Wrapper>
    );
  }

  if (error) {
    return <Alert variant="warning">{error}</Alert>;
  }

  if (items) {
    return (
      <Wrapper>
        {items.map(({ title, data }) => (
          <section key={title}>
            <h5 className="fw-bold">{title}</h5>
            {isSwiper ? (
              <Swiper {...swiperOptions}>
                {data &&
                  data.map(movie => (
                    <SwiperSlide key={movie.id}>
                      <MovieCard model={movie} />
                    </SwiperSlide>
                  ))}
              </Swiper>
            ) : (
              <MovieList>
                {data &&
                  data.map(movie => <MovieCard key={movie.id} model={movie} />)}
              </MovieList>
            )}
          </section>
        ))}
      </Wrapper>
    );
  }

  return null;
}

Collections.propTypes = {
  isSwiper: PropTypes.bool,
  items: PropTypes.oneOfType([PropTypes.array, PropTypes.bool]),
  error: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
  loading: PropTypes.bool,
};

export default Collections;
