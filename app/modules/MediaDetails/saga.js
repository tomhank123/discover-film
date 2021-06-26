import request from 'api/request';
import { REQUEST } from 'utils/reduxUtils';
import { createEndpoint } from 'utils/apiUtils';
import { takeLatest, all, call, put, delay, select } from 'redux-saga/effects';
import { makeSelectLocale } from 'containers/LanguageProvider/selectors';
import { GET_MEDIA_DETAILS, getMediaDetails } from 'containers/App/actions';

export function* fetchDetails({ request: { id, mediaType } }) {
  yield delay(2000);

  const language = yield select(makeSelectLocale());
  const requestUrl = createEndpoint(`/${mediaType}/${id}`, {
    append_to_response: 'similar,videos,images,credits,reviews',
    language,
  });

  try {
    const details = yield call(request, 'get', requestUrl);

    yield put(getMediaDetails.success(details));
  } catch ({ message }) {
    yield put(getMediaDetails.failure(message));
  }
}

export function* watchDetails() {
  yield takeLatest(GET_MEDIA_DETAILS[REQUEST], fetchDetails);
}

export default function* mediaDetailsSaga() {
  yield all([watchDetails()]);
}
