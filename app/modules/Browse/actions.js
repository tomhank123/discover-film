/*
 *
 * Browse actions
 *
 */
import { createAsyncAction, createRequestTypes } from 'utils/reduxUtils';

export const GET_COLLECTIONS = createRequestTypes('app/Browse/GET_COLLECTIONS');
export const getCollections = createAsyncAction(GET_COLLECTIONS);
