import { matchPath } from 'react-router';
import * as ROUTES from 'routes/constants';
import * as combinedUtils from './combinedUtils';

export {
  getPoster,
  getBackdrop,
  getVideoUrls,
  getOverview,
  getBrief,
} from './combinedUtils';

export const getIdFromRoute = location => {
  const match = matchPath(location.pathname, {
    path: '/movie/:movieId',
    exact: true,
    strict: true,
  });
  const movieId = +match.params.movieId;

  return movieId;
};

export const getUrl = id => combinedUtils.getUrl(ROUTES.MOVIE, id);

export const getReleasedYear = releaseDate =>
  releaseDate ? releaseDate.slice(0, 4) : null;

export const convertRuntime = runtime => {
  if (!runtime) return null;

  const hours = Math.floor(runtime / 60);
  const minutes = runtime % 60;

  return `${hours}h ${minutes}m`;
};
