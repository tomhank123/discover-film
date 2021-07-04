import { all, call, delay, put, takeLatest, select } from 'redux-saga/effects';
import { REQUEST } from 'utils/reduxUtils';
import { createEndpoint } from 'utils/apiUtils';
import { createMediaObject } from 'utils/mediaUtils';
import request from 'api/request';
import { makeSelectLocale } from 'containers/LanguageProvider/selectors';
import { getMediaObject, GET_MEDIA_OBJECT } from './actions';

export function* fetchMediaObject() {
  yield delay(2000);

  const language = yield select(makeSelectLocale());

  try {
    const responses = yield all([
      call(request, 'get', createEndpoint('/tv/airing_today', { language })),
      call(request, 'get', createEndpoint('/tv/top_rated', { language })),
      call(request, 'get', createEndpoint('/tv/popular', { language })),
      call(request, 'get', createEndpoint('/tv/on_the_air', { language })),
    ]);

    const mediaObject = createMediaObject(responses, [
      { title: 'What are people watching?', hasCounter: false },
      { title: 'Top Rated', hasCounter: true },
      { title: 'Popular On TV', hasCounter: false },
      { title: 'Worth the wait', hasCounter: false },
    ]);

    yield put(getMediaObject.success(mediaObject));
  } catch ({ message }) {
    yield put(getMediaObject.failure(message));
  }
}

export function* watchMediaObject() {
  yield takeLatest(GET_MEDIA_OBJECT[REQUEST], fetchMediaObject);
}

export default function* tvSaga() {
  yield all([watchMediaObject()]);
}
