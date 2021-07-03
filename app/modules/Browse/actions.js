/*
 *
 * Browse actions
 *
 */
import { createAsyncAction, createRequestTypes } from 'utils/reduxUtils';

export const GET_MEDIA_OBJECT = createRequestTypes('app/Browse/GET_MEDIA_OBJECT');
export const getMediaObject = createAsyncAction(GET_MEDIA_OBJECT);
