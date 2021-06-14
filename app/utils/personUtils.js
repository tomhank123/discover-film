import truncate from 'lodash/truncate';
import * as ROUTES from 'routes/constants';

export const getPoster = posterPath =>
  posterPath
    ? `https://www.themoviedb.org/t/p/w470_and_h470_face/${posterPath}`
    : posterPath;

export const getUrl = id => `${ROUTES.PERSON}/${id}`;

export const getBio = bio =>
  truncate(bio, {
    length: 180,
    omission: ' ...<a href="/" class="text-success">Wikipedia</a>',
  }).replace(/\n/g, '<br />');
