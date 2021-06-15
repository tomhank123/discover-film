import { all, call, delay, put, takeLatest, select } from 'redux-saga/effects';
import { REQUEST } from 'utils/reduxUtils';
import { createEndpoint } from 'utils/apiUtils';
import request from 'api/request';
import { makeSelectLocale } from 'containers/LanguageProvider/selectors';
import { getCollections, GET_COLLECTIONS } from './actions';

export function* fetchCollecttions() {
  yield delay(2000);

  const language = yield select(makeSelectLocale());

  try {
    const [popular, nowPlaying, upcoming, topRated] = yield all([
      call(request, 'get', createEndpoint('/tv/popular', { language })),
      call(request, 'get', createEndpoint('/tv/airing_today', { language })),
      call(request, 'get', createEndpoint('/tv/on_the_air', { language })),
      call(request, 'get', createEndpoint('/tv/top_rated', { language })),
    ]);

    yield put(
      getCollections.success([
        {
          id: 'Popular On TV',
          title: 'Popular On TV',
          data: popular,
        },
        {
          id: 'What are people watching?',
          title: 'What are people watching?',
          data: nowPlaying,
        },
        {
          id: 'Worth the wait',
          title: 'Worth the wait',
          data: upcoming,
        },
        {
          id: 'Top Rated',
          title: 'Top Rated',
          data: topRated,
        },
      ]),
    );
  } catch ({ message }) {
    yield put(getCollections.failure(message));
  }
}

export function* watchCollections() {
  yield takeLatest(GET_COLLECTIONS[REQUEST], fetchCollecttions);
}

export default function* tvSaga() {
  yield all([watchCollections()]);
}
