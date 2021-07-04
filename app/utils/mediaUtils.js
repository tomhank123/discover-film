import * as ROUTES from 'routes/constants';

export const getMediaFromRoute = ({ pathname }) => {
  const [mediaType, id] = pathname.split('/').filter(Boolean);

  return {
    id: +id,
    mediaType,
  };
};

const getPoster = poster =>
  poster ? `https://www.themoviedb.org/t/p/original/${poster}` : poster;

const getBackdrop = backdrop =>
  backdrop ? `https://www.themoviedb.org/t/p/original/${backdrop}` : backdrop;

const getUrl = (id, mediaType) => {
  const pathname = mediaType === 'movie' ? ROUTES.MOVIE : ROUTES.TV;

  return `${pathname}/${id}`;
};

const getReleasedYear = releaseDate =>
  releaseDate ? releaseDate.slice(0, 4) : null;

export const renderedMedia = model => {
  const mediaType = model.title ? 'movie' : 'tv';
  const renderedModel = {
    mediaType,
    id: model.id,
    title: model.title || model.name,
    poster: getPoster(model.poster_path),
    backdrop: getBackdrop(model.backdrop_path),
    url: getUrl(model.id, mediaType),
  };

  // eslint-disable-next-line default-case
  switch (mediaType) {
    case 'movie':
      renderedModel.releasedYear = getReleasedYear(model.release_date);
      break;
    case 'tv':
      renderedModel.releasedYear = getReleasedYear(model.first_air_date);
      break;
  }

  return renderedModel;
};

export const createMediaObject = (mediaObjects, options) =>
  mediaObjects.map(({ results }, index) => ({
    ...options[index],
    edges: results.filter(item =>
      item.media_type ? ['movie', 'tv'].includes(item.media_type) : item,
    ),
  }));
