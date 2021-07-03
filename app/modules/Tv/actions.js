/*
 *
 * Tv actions
 *
 */
import { createAsyncAction, createRequestTypes } from 'utils/reduxUtils';

export const GET_MEDIA_OBJECT = createRequestTypes('app/Tv/GET_MEDIA_OBJECT');
export const getMediaObject = createAsyncAction(GET_MEDIA_OBJECT);
