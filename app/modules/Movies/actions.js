/*
 *
 * Movies actions
 *
 */
import { createAsyncAction, createRequestTypes } from 'utils/reduxUtils';

export const GET_MEDIA_OBJECT = createRequestTypes('app/Movies/GET_MEDIA_OBJECT');
export const getMediaObject = createAsyncAction(GET_MEDIA_OBJECT);
