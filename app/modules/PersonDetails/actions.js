/*
 *
 * PersonDetails actions
 *
 */
import { createAsyncAction, createRequestTypes } from 'utils/reduxUtils';

export const GET_DETAILS = createRequestTypes('app/PersonDetails/GET_DETAILS');
export const getDetails = createAsyncAction(GET_DETAILS);
