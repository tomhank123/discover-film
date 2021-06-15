import request from 'api/request';
import { all, call, delay, put, takeLatest, select } from 'redux-saga/effects';
import { REQUEST } from 'utils/reduxUtils';
import { createEndpoint } from 'utils/apiUtils';
import { makeSelectLocale } from 'containers/LanguageProvider/selectors';
import { getCollections, GET_COLLECTIONS } from './actions';

export function* fetchCollecttions() {
  yield delay(2000);

  const language = yield select(makeSelectLocale());

  try {
    const [popular, nowPlaying, upcoming, topRated] = yield all([
      call(request, 'get', createEndpoint('/movie/popular', { language })),
      call(request, 'get', createEndpoint('/movie/now_playing', { language })),
      call(request, 'get', createEndpoint('/movie/upcoming', { language })),
      call(request, 'get', createEndpoint('movie/top_rated', { language })),
    ]);

    yield put(
      getCollections.success([
        {
          id: 'Popular In Theaters',
          title: 'Popular In Theaters',
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

export default function* moviesSaga() {
  yield all([watchCollections()]);
}
