import queryString from 'query-string';

export const selectionFilter = data => ({
  people: data.filter(item => item.media_type === 'person'),
  tv: data.filter(item => item.media_type === 'tv'),
  movies: data.filter(item => item.media_type === 'movie'),
});

export const getQueryFromRoute = search => {
  if (!search) return null;

  const { q } = queryString.parse(search);

  return q;
};
