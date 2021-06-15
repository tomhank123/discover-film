import queryString from 'query-string';

export const createEndpoint = (endpoint, params = {}) => {
  const query = queryString.stringify(params, {
    skipNull: true,
  });

  return `${endpoint}?${query}`;
};
