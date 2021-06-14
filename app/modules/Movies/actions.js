/*
 *
 * Movies actions
 *
 */
import { createAsyncAction, createRequestTypes } from 'utils/reduxUtils';

export const GET_COLLECTIONS = createRequestTypes('app/Movies/GET_COLLECTIONS');
export const getCollections = createAsyncAction(GET_COLLECTIONS);
