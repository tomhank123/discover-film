/*
 *
 * Search actions
 *
 */
import { createAsyncAction, createRequestTypes } from 'utils/reduxUtils';

export const GET_MULTI_RESULTS = createRequestTypes('app/Tv/GET_MULTI_RESULTS');
export const getMultiResults = createAsyncAction(GET_MULTI_RESULTS);

export const GET_KEYWORDS = createRequestTypes('app/Tv/GET_KEYWORDS');
export const getKeywords = createAsyncAction(GET_KEYWORDS);
