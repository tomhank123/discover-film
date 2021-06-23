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
    path: '/tv/:tvId',
    exact: true,
    strict: true,
  });
  const tvId = +match.params.tvId;

  return tvId;
};

export const getUrl = id => combinedUtils.getUrl(ROUTES.TV, id);

export const convertRuntime = runtime => {
  const hours = Math.floor(runtime / 60);
  const minutes = runtime % 60;

  return `${hours}h ${minutes}m`;
};
