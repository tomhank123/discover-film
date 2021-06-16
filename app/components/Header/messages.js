/*
 * Header Messages
 *
 * This contains all the text for the Header component.
 */

import { defineMessages } from 'react-intl';

export const scope = 'app.components.Header';

export default defineMessages({
  header: {
    id: `${scope}.header`,
    defaultMessage: 'This is the Header component!',
  },
  movies: {
    id: `${scope}.movies`,
    defaultMessage: 'Movies',
  },
  tvShow: {
    id: `${scope}.tv_show`,
    defaultMessage: 'TV Shows',
  },
  people: {
    id: `${scope}.people`,
    defaultMessage: 'People',
  },
  login: {
    id: `${scope}.login`,
    defaultMessage: 'Login',
  },
  search: {
    id: `${scope}.search`,
    defaultMessage: 'Search',
  },
});
