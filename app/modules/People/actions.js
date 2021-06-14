/*
 *
 * People actions
 *
 */
import { createAsyncAction, createRequestTypes } from 'utils/reduxUtils';

export const GET_POPULAR = createRequestTypes('app/People/GET_POPULAR');
export const getPopular = createAsyncAction(GET_POPULAR);
