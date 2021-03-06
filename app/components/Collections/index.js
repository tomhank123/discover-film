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
import MediaCard from 'containers/MediaCard';
import swiperOptions, { getSwiperOptions } from './config';
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
                    <MediaCard loading={loading} />
                  </SwiperSlide>
                ))}
              </Swiper>
            ) : (
              <MovieList>
                {[7, 8, 9, 10, 11, 12, 13, 14, 15].map(childId => (
                  <MediaCard key={childId} loading />
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
        {items.map(({ title, edges, hasCounter }) => (
          <section key={title}>
            <h5 className="fw-bold">{title}</h5>
            {isSwiper ? (
              <Swiper {...getSwiperOptions(hasCounter)}>
                {edges &&
                  edges.map((movie, index) => (
                    <SwiperSlide key={movie.id}>
                      <MediaCard
                        model={movie}
                        counter={hasCounter}
                        rank={index + 1}
                      />
                    </SwiperSlide>
                  ))}
              </Swiper>
            ) : (
              <MovieList counter={hasCounter}>
                {edges &&
                  edges.map((movie, index) => (
                    <MediaCard
                      key={movie.id}
                      model={movie}
                      counter={hasCounter}
                      rank={index + 1}
                    />
                  ))}
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
