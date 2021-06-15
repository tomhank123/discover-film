import { all, call, delay, put, takeLatest, select } from 'redux-saga/effects';
import { REQUEST } from 'utils/reduxUtils';
import { createEndpoint } from 'utils/apiUtils';
import request from 'api/request';
import { makeSelectLocale } from 'containers/LanguageProvider/selectors';
import { getKeywords, getMultiResults, GET_MULTI_RESULTS } from './actions';

export function* fetchMultiResults({ request: { query } }) {
  yield delay(2000);

  const language = yield select(makeSelectLocale());

  try {
    const response = yield call(
      request,
      'get',
      createEndpoint(`/search/multi`, {
        query,
        language,
      }),
    );

    yield put(getMultiResults.success(response));
  } catch ({ message }) {
    yield put(getMultiResults.failure(message));
  }
}

export function* fetchKeywords({ request: { query } }) {
  yield delay(2000);

  try {
    const response = yield call(
      request,
      'get',
      `/search/keyword?query=${query}`,
    );

    yield put(getKeywords.success(response));
  } catch ({ message }) {
    yield put(getKeywords.failure(message));
  }
}

export function* watchMultiResults() {
  yield takeLatest(GET_MULTI_RESULTS[REQUEST], fetchMultiResults);
}

export function* watchKeywords() {
  yield takeLatest(GET_MULTI_RESULTS[REQUEST], fetchKeywords);
}

export default function* searchSaga() {
  yield all([watchMultiResults(), watchKeywords()]);
}
