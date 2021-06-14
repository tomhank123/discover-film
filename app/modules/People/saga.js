import request from 'api/request';
import { REQUEST } from 'utils/reduxUtils';
import { takeLatest, all, call, put, delay } from 'redux-saga/effects';
import { GET_POPULAR, getPopular } from './actions';

export function* fetchPopularPeople() {
  const requestUrl = '/person/popular';

  yield delay(2000);

  try {
    const response = yield call(request, 'get', requestUrl);

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
