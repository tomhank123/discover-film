import request from 'api/request';
import { REQUEST } from 'utils/reduxUtils';
import { createEndpoint } from 'utils/apiUtils';
import { takeLatest, all, call, put, delay, select } from 'redux-saga/effects';
import { makeSelectLocale } from 'containers/LanguageProvider/selectors';
import { GET_POPULAR, getPopular } from './actions';

export function* fetchPopularPeople() {
  yield delay(2000);
  const language = yield select(makeSelectLocale());

  try {
    const response = yield call(
      request,
      'get',
      createEndpoint('/person/popular', { language }),
    );

    yield put(getPopular.success(response));
  } catch ({ message }) {
    yield put(getPopular.failure(message));
  }
}

export function* watchPopularPeople() {
  yield takeLatest(GET_POPULAR[REQUEST], fetchPopularPeople);
}

export default function* peopleSaga() {
  yield all([watchPopularPeople()]);
}
