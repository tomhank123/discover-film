import request from 'api/request';
import { makeSelectLocale } from 'containers/LanguageProvider/selectors';
import { all, call, delay, put, select, takeLatest } from 'redux-saga/effects';
import { createEndpoint } from 'utils/apiUtils';
import { createMediaObject } from 'utils/mediaUtils';
import { REQUEST } from 'utils/reduxUtils';
import { getMediaObject, GET_MEDIA_OBJECT } from './actions';

export function* fetchMediaObject() {
  yield delay(2000);

  const language = yield select(makeSelectLocale());

  try {
    const responses = yield all([
      call(request, 'get', createEndpoint('/movie/now_playing', { language })),
      call(request, 'get', createEndpoint('movie/top_rated', { language })),
      call(request, 'get', createEndpoint('/movie/popular', { language })),
      call(request, 'get', createEndpoint('/movie/upcoming', { language })),
    ]);

    const mediaObject = createMediaObject(responses, [
      { title: 'What are people watching?', hasCounter: false },
      { title: 'Top Rated', hasCounter: true },
      { title: 'Popular In Theaters', hasCounter: false },
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

export default function* moviesSaga() {
  yield all([watchMediaObject()]);
}
