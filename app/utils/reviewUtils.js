import truncate from 'lodash/truncate';

export const getContent = content =>
  truncate(content, {
    length: 120,
    omission: ' ...<a href="/" class="text-success">More</a>',
  }).replace(/\n/g, '<br />');

export const getAvatar = avatarPath => {
  if (!avatarPath) return null;

  if (avatarPath.indexOf('http') > 0) {
    return avatarPath.replace('/', '');
  }

  return `https://www.themoviedb.org/t/p/w470_and_h470_face/${avatarPath}`;
};
