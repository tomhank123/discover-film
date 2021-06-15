import request from 'api/request';
import { REQUEST } from 'utils/reduxUtils';
import { createEndpoint } from 'utils/apiUtils';
import { takeLatest, all, call, put, delay, select } from 'redux-saga/effects';
import { makeSelectLocale } from 'containers/LanguageProvider/selectors';
import { GET_DETAILS, getDetails } from './actions';

export function* fetchDetails({ request: { tvId } }) {
  yield delay(2000);

  const language = yield select(makeSelectLocale());
  const requestUrl = createEndpoint(`/tv/${tvId}`, {
    append_to_response: 'similar,videos,images,credits,reviews',
    language,
  });

  try {
    const details = yield call(request, 'get', requestUrl);

    yield put(
      getDetails.success({
        ...details,
      }),
    );
  } catch ({ message }) {
    yield put(getDetails.failure(message));
  }
}

export function* watchDetails() {
  yield takeLatest(GET_DETAILS[REQUEST], fetchDetails);
}

export default function* tvDetailsSaga() {
  yield all([watchDetails()]);
}
