import truncate from 'lodash/truncate';

export const getPoster = poster =>
  poster ? `https://www.themoviedb.org/t/p/original/${poster}` : poster;

export const getBackdrop = backdrop =>
  backdrop ? `https://www.themoviedb.org/t/p/original/${backdrop}` : backdrop;

export const getUrl = (pathname, id) => `${pathname}/${id}`;

export const getBrief = overview =>
  truncate(overview, {
    length: 300,
  });

export const getOverview = overview =>
  truncate(overview, {
    length: 300,
    omission: ' ...<a href="/" class="text-success">More</a>',
  }).replace(/\n/g, '<br />');

export const getVideoUrls = videos => {
  if (!videos) return [];

  const baseUrl = 'https://www.youtube.com/watch?v=';
  const youtubeUrls = videos
    .filter(({ site }) => site === 'YouTube')
    .map(({ key }) => `${baseUrl}${key}`);
  return [...youtubeUrls];
};
