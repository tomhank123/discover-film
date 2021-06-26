import { createAsyncAction, createRequestTypes } from 'utils/reduxUtils';

export const GET_MEDIA_DETAILS = createRequestTypes(
  'app/App/GET_MEDIA_DETAILS',
);
export const getMediaDetails = createAsyncAction(GET_MEDIA_DETAILS);
