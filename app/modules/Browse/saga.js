import request from 'api/request';
import { REQUEST } from 'utils/reduxUtils';
import { createEndpoint } from 'utils/apiUtils';
import { takeLatest, all, call, put, delay, select } from 'redux-saga/effects';
import { makeSelectLocale } from 'containers/LanguageProvider/selectors';
import { GET_COLLECTIONS, getCollections } from './actions';

export function* fetchCollecttions() {
  yield delay(2000);

  const language = yield select(makeSelectLocale());

  try {
    const [
      popularInTheaters,
      popularOnTv,
      trendingToday,
      trendingThisWeek,
    ] = yield all([
      call(request, 'get', createEndpoint('/movie/popular', { language })),
      call(request, 'get', createEndpoint('/tv/popular', { language })),
      call(request, 'get', createEndpoint('/trending/all/day', { language })),
      call(request, 'get', createEndpoint('/trending/all/week', { language })),
    ]);

    yield put(
      getCollections.success([
        {
          id: 'Popular On TV',
          title: 'Popular On TV',
          data: popularOnTv,
        },
        {
          id: 'Popular In Theaters',
          title: 'Popular In Theaters',
          data: popularInTheaters,
        },
        {
          id: 'Trending Today',
          title: 'Trending Today',
          data: {
            ...trendingToday,
            results: trendingToday.results.filter(item =>
              ['movie', 'tv'].includes(item.media_type),
            ),
          },
        },
        {
          id: 'Trending This Week',
          title: 'Trending This Week',
          data: {
            ...trendingThisWeek,
            results: trendingThisWeek.results.filter(item =>
              ['movie', 'tv'].includes(item.media_type),
            ),
          },
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

export default function* browseSaga() {
  yield all([watchCollections()]);
}
