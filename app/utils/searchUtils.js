export const selectionFilter = data => ({
  people: data.filter(item => item.media_type === 'person'),
  tv: data.filter(item => item.media_type === 'tv'),
  movies: data.filter(item => item.media_type === 'movie'),
});
