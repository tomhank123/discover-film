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
      call(request, 'get', createEndpoint('/trending/all/day', { language })),
      call(request, 'get', createEndpoint('/trending/all/week', { language })),
      call(request, 'get', createEndpoint('/movie/popular', { language })),
      call(request, 'get', createEndpoint('/tv/popular', { language })),
    ]);

    const mediaObject = createMediaObject(responses, [
      { title: 'Trending Today', hasCounter: false },
      { title: 'Trending This Week', hasCounter: false },
      { title: 'Popular On TV', hasCounter: false },
      { title: 'Popular In Theaters', hasCounter: false },
    ]);

    yield put(getMediaObject.success(mediaObject));
  } catch ({ message }) {
    yield put(getMediaObject.failure(message));
  }
}

export function* watchMediaObject() {
  yield takeLatest(GET_MEDIA_OBJECT[REQUEST], fetchMediaObject);
}

export default function* browseSaga() {
  yield all([watchMediaObject()]);
}
