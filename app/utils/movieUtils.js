import truncate from 'lodash/truncate';
import * as ROUTES from 'routes/constants';

export const getPoster = poster =>
  poster ? `https://www.themoviedb.org/t/p/original/${poster}` : poster;

export const getBackdrop = backdrop =>
  backdrop ? `https://www.themoviedb.org/t/p/original/${backdrop}` : backdrop;

export const getUrl = id => `${ROUTES.MOVIE}/${id}`;

export const getOverview = overview =>
  truncate(overview, {
    length: 180,
    omission: ' ...<a href="/" class="text-success">Wikipedia</a>',
  }).replace(/\n/g, '<br />');

export const getReleasedYear = releaseDate => releaseDate.slice(0, 4);

export const convertRuntime = runtime => {
  const hours = Math.floor(runtime / 60);
  const minutes = runtime % 60;

  return `${hours}h ${minutes}m`;
};

export const getVideoUrls = videos => {
  const baseUrl = 'https://www.youtube.com/watch?v=';
  const youtubeUrls = videos
    .filter(({ site }) => site === 'YouTube')
    .map(({ key }) => `${baseUrl}${key}`);
  return [...youtubeUrls];
};
