import truncate from 'lodash/truncate';

export const getItemsPerPage = () => 2;

export const getBrief = content =>
  truncate(content, {
    length: 120,
  });

export const getContent = content => content.replace(/\n/g, '<br />');

export const getAvatar = avatarPath => {
  if (!avatarPath) return null;

  if (avatarPath.indexOf('http') > 0) {
    return avatarPath.replace('/', '');
  }

  return `https://www.themoviedb.org/t/p/w470_and_h470_face/${avatarPath}`;
};
