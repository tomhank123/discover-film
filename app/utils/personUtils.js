import { matchPath } from 'react-router';
import truncate from 'lodash/truncate';
import * as ROUTES from 'routes/constants';

export const getIdFromRoute = location => {
  const match = matchPath(location.pathname, {
    path: '/person/:personId',
    exact: true,
    strict: true,
  });
  const personId = +match.params.personId;

  return personId;
};

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
