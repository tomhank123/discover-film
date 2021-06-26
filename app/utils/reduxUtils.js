import { call, put } from 'redux-saga/effects';

export const REQUEST = 'REQUEST';
export const SUCCESS = 'SUCCESS';
export const FAILURE = 'FAILURE';

export function createRequestTypes(base) {
  if (!base) {
    throw new Error("cannot create request type with base = '' or base = null");
  }
  return [REQUEST, SUCCESS, FAILURE].reduce((acc, type) => {
    acc[type] = `${base}_${type}`;
    return acc;
  }, {});
}

export function createAction(type, payload = {}) {
  return {
    type,
    ...payload,
  };
}

export function createAsyncAction(type) {
  return {
    request: request => createAction(type[REQUEST], { request }),
    success: response => createAction(type[SUCCESS], { response }),
    failure: response => createAction(type[FAILURE], { response }),
  };
}

/*
 * entity must have a success, request and failure method
 * request is a function that returns a promise when called
 * */
export function* createAsyncActionCreator(
  request,
  method = 'get',
  url,
  entity,
  ...args
) {
  try {
    const response = yield call(request, method, url);

    yield put(entity.success(response, ...args));
  } catch (error) {
    yield put(entity.failure(error, ...args));
  }
}
